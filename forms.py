from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField
from wtforms.validators import DataRequired, Email, Length, EqualTo


class MessageForm(FlaskForm):
    """Form for adding/editing messages."""

    text = TextAreaField('text', validators=[DataRequired()])


class UserAddForm(FlaskForm):
    """Form for adding users."""

    username = StringField('Username', validators=[DataRequired()])
    email = StringField('E-mail', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[Length(min=6)])
    image_url = StringField('(Optional) Image URL')


class LoginForm(FlaskForm):
    """Login form."""

    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[Length(min=6)])


class UserEditForm(FlaskForm):
    """Form for editing a user."""

    username = StringField('Username', validators=[DataRequired()])
    email = StringField('E-mail', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[Length(min=6)])
    image_url = StringField('(Optional) Image URL')
    header_image_url = StringField('(Optional) Cover Photo URL')
    bio = StringField('Bio', validators=[Length(max=250)])
    location = StringField('Location')

class ChangePasswordForm(FlaskForm):
    """Form for changing a password."""
    old_password = PasswordField('Current Password', validators=[Length(min=6)])
    new_password = PasswordField('New Password', 
                                validators=[Length(min=6), EqualTo('confirm', 
                                message='Passwords must match')])
    confirm = PasswordField('Repeat New Password', validators=[Length(min=6)])