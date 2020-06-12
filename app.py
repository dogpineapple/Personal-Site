import os

from flask import Flask, render_template, request, flash, redirect, session, g, url_for
# from flask_debugtoolbar import DebugToolbarExtension
from sqlalchemy.exc import IntegrityError
from functools import wraps

from forms import UserAddForm, LoginForm, MessageForm, UserEditForm
from models import db, connect_db, User, Message, Follows, Likes

CURR_USER_KEY = "curr_user"

app = Flask(__name__)

# Get DB_URI from environ variable (useful for production/testing) or
# if not set there, use development local db.
app.config['SQLALCHEMY_DATABASE_URI'] = (
    os.environ.get('DATABASE_URL', 'postgres:///warbler'))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', "it's a secret")
# toolbar = DebugToolbarExtension(app)

connect_db(app)


##############################################################################
# User signup/login/logout


@app.before_request
def add_user_to_g():
    """If we're logged in, add curr user to Flask global."""

    if CURR_USER_KEY in session:
        g.user = User.query.get(session[CURR_USER_KEY])

    else:
        g.user = None

def login_required(f):
    @wraps(f) 
    def decorated_function(*args, **kwargs):
        if g.user is None:
            flash("Access unauthorized.", "danger")
            return redirect("/")
        return f(*args, **kwargs)
    return decorated_function


def do_login(user):
    """Log in user."""

    session[CURR_USER_KEY] = user.id


def do_logout():
    """Logout user."""

    if CURR_USER_KEY in session:
        del session[CURR_USER_KEY]

def serialize_likes(like):
    """serialize a SQLalchemy like obj"""

    return {
        "message_id" : like.message_id,
        "user_id" : like.user_id
    }

def serialize_message(msg):
    """ serialize a SQLalchemy msg obj """

    return {
        "text": msg.text,
        "user_id": g.user.id
    }

@app.route('/signup', methods=["GET", "POST"])
def signup():
    """Handle user signup.

    Create new user and add to DB. Redirect to home page.

    If form not valid, present form.

    If the there already is a user with that username: flash message
    and re-present form.
    """

    form = UserAddForm()

    if form.validate_on_submit():
        try:
            user = User.signup(
                username=form.username.data,
                password=form.password.data,
                email=form.email.data,
                image_url=form.image_url.data or User.image_url.default.arg,
            )
            db.session.commit()

        except IntegrityError:
            flash("Username already taken", 'danger')
            return render_template('users/signup.html', form=form)

        do_login(user)

        return redirect("/")

    else:
        return render_template('users/signup.html', form=form)


@app.route('/login', methods=["GET", "POST"])
def login():
    """Handle user login."""

    form = LoginForm()

    if form.validate_on_submit():
        user = User.authenticate(form.username.data,
                                 form.password.data)
        if user:
            do_login(user)
            flash(f"Hello, {user.username}!", "success")
            return redirect("/")
        flash("Invalid credentials.", 'danger')

    return render_template('users/login.html', form=form)


@app.route('/logout')
def logout():
    """Handle logout of user."""
    
    do_logout()
    flash("You have successfully logged out", 'success')
    return redirect("/")


##############################################################################
# General user routes:

@app.route('/users')
def list_users():
    """Page with listing of users.

    Can take a 'q' param in querystring to search by that username.
    """

    form = MessageForm()

    search = request.args.get('q')

    if not search:
        users = User.query.all()
    else:
        users = User.query.filter(User.username.like(f"%{search}%")).all()

    return render_template('users/index.html', users=users, new_msg_form=form)


@app.route('/users/<int:user_id>')
def users_show(user_id):
    """Show user profile."""

    user = User.query.get_or_404(user_id)

    form = MessageForm()

    # snagging messages in order from the database;
    # user.messages won't be in order by default
    messages = (Message
                .query
                .filter(Message.user_id == user_id)
                .order_by(Message.timestamp.desc())
                .limit(100)
                .all())

    liked_posts = [liked.id for liked in g.user.likes]

    return render_template('users/show.html', user=user, messages=messages, likes=liked_posts, new_msg_form=form)


@app.route('/users/<int:user_id>/following')
@login_required
def show_following(user_id):
    """Show list of people this user is following."""

    form = MessageForm()

    user = User.query.get_or_404(user_id)
    return render_template('users/following.html', user=user, new_msg_form=form)


@app.route('/users/<int:user_id>/followers')
@login_required
def users_followers(user_id):
    """Show list of followers of this user."""

    form = MessageForm()

    # if not g.user:
    #     flash("Access unauthorized.", "danger")
    #     return redirect("/")

    user = User.query.get_or_404(user_id)
    return render_template('users/followers.html', user=user, new_msg_form=form)


@app.route('/users/follow/<int:follow_id>', methods=['POST'])
@login_required
def add_follow(follow_id):
    """Add a follow for the currently-logged-in user."""

    followed_user = User.query.get_or_404(follow_id)
    g.user.following.append(followed_user)
    db.session.commit()

    return redirect(f"/users/{g.user.id}/following")


@app.route('/users/stop-following/<int:follow_id>', methods=['POST'])
@login_required
def stop_following(follow_id):
    """Have currently-logged-in-user stop following this user."""

    followed_user = User.query.get(follow_id)
    g.user.following.remove(followed_user)
    db.session.commit()

    return redirect(f"/users/{g.user.id}/following")


@app.route('/users/profile', methods=["GET", "POST"])
@login_required
def profile():
    """Update profile for current user."""

    user = g.user

    form = UserEditForm(obj=user)

    new_msg_form = MessageForm()

    if form.validate_on_submit():
        try:
            if User.authenticate(user.username, form.password.data):
                user.username=form.username.data,
                user.email=form.email.data,
                user.image_url=form.image_url.data or User.image_url.default.arg,
                user.header_image_url = form.header_image_url.data,
                user.location = form.location.data,
                user.bio = form.bio.data
            
                db.session.commit()
            
            else:
                form.password.errors = ['Incorrect Password']
                return render_template('users/edit.html', form=form, new_msg_form=new_msg_form)

        except IntegrityError:
            flash("Username already taken", 'danger')
            return render_template('users/edit.html', form=form, new_msg_form=new_msg_form)



        return redirect(f"/users/{ user.id }")

    else:
        return render_template('users/edit.html', form=form, new_msg_form=new_msg_form)




@app.route('/users/delete', methods=["POST"])
@login_required
def delete_user():
    """Delete user."""

    do_logout()

    db.session.delete(g.user)
    db.session.commit()

    return redirect("/signup")


##############################################################################
# Liked routes:

@app.route('/messages/<int:message_id>/like', methods=["POST"])
def like_post(message_id):
    """ Create record of like in likes table """
    # need to specify current user_id in query filter
    is_liked = Likes.query.filter(Likes.message_id == message_id, Likes.user_id == g.user.id).first()

    if is_liked:
        db.session.delete(is_liked)
        db.session.commit()
        return {"message" : "successfully removed like"}
    else:
        liked_post = Likes(message_id=message_id, user_id=g.user.id)
        serialized = serialize_likes(liked_post)
        db.session.add(liked_post)
        db.session.commit()
        return serialized

@app.route('/users/<int:user_id>/likes')
def user_liked_posts(user_id):
    """ list all the like records by the user """
    user = User.query.get_or_404(user_id)

    form = MessageForm()

    # line 294+296 is = line 113 of models.py 
    # liked_msg_ids = [ liked_msg.id for liked_msg in g.user.likes ]

    # liked_msgs = (Message.query.filter(Message.id.in_(liked_msg_ids)).all())

    return render_template('users/liked.html', liked_msgs=user.likes, user=user, new_msg_form=form)

##############################################################################
# Messages routes:

@app.route('/messages/new', methods=["GET", "POST"])
@login_required
def messages_add():
    """Add a message:

    Show form if GET. If valid, update message and redirect to user page.
    """

    text_data = request.json['text']

# didnt need line 348 because our form condition will always work and we dunno why 348 doesn't work D:
    # if form.validate_on_submit():
    msg = Message(text=text_data)
    g.user.messages.append(msg)
    db.session.commit()
    serialized = serialize_message(msg)

    return serialized


@app.route('/messages/<int:message_id>', methods=["GET"])
def messages_show(message_id):
    """Show a message."""
    form = MessageForm()

    msg = Message.query.get(message_id)

    return render_template('messages/show.html', message=msg, form=form)


@app.route('/messages/<int:message_id>/delete', methods=["POST"])
@login_required
def messages_destroy(message_id):
    """Delete a message."""

    msg = Message.query.get(message_id)
    db.session.delete(msg)
    db.session.commit()

    return redirect(f"/users/{g.user.id}")


##############################################################################
# Homepage and error pages


@app.route('/')
def homepage():
    """Show homepage:

    - anon users: no messages
    - logged in: 100 most recent messages of followed_users
    """
    form = MessageForm()

    if g.user:
        followings = [following.id for following in g.user.following]
        followings.append(g.user.id)

        messages = (Message
                    .query
                    .filter(Message.user_id.in_(followings))
                    .order_by(Message.timestamp.desc())
                    .limit(100)
                    .all())

        liked_posts = [liked.id for liked in g.user.likes]

        return render_template('home.html', messages=messages, liked_posts=liked_posts, new_msg_form=form)

    else:
        return render_template('home-anon.html')


##############################################################################
# Turn off all caching in Flask
#   (useful for dev; in production, this kind of stuff is typically
#   handled elsewhere)
#
# https://stackoverflow.com/questions/34066804/disabling-caching-in-flask

@app.after_request
def add_header(req):
    """Add non-caching headers on every request."""

    req.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    req.headers["Pragma"] = "no-cache"
    req.headers["Expires"] = "0"
    req.headers['Cache-Control'] = 'public, max-age=0'
    return req
