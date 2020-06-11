"""User View tests."""

# run these tests like:
#
#    FLASK_ENV=production python -m unittest test_user_views.py


import os
from unittest import TestCase

from models import db, connect_db, Message, User, Follows

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app, CURR_USER_KEY

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data

db.create_all()

# Don't have WTForms use CSRF at all, since it's a pain to test

app.config['WTF_CSRF_ENABLED'] = False


class UserViewTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""

        User.query.delete()
        Message.query.delete()

        self.client = app.test_client()

        self.testuser = User.signup(username="testuser",
                                    email="test@test.com",
                                    password="testuser",
                                    image_url=None)

        db.session.commit()

    def test_list_users_route(self):
        # Since we need to change the session to mimic logging in,
        # we need to use the changing-session trick:
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id

            # Now, that session setting is saved, so we can have
            # the rest of ours test

            resp = c.get("/users")
            
            html = resp.get_data(as_text=True)

            # Make sure it redirects
            self.assertEqual(resp.status_code, 200)
            self.assertIn('<div class="row justify-content-end">', html)

    def test_user_profile(self):
        # Since we need to change the session to mimic logging in,
        # we need to use the changing-session trick:
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id

        resp = c.get(f"/users/{self.testuser.id}")

        html = resp.get_data(as_text=True)

        # Make sure it redirects
        self.assertEqual(resp.status_code, 200)
        self.assertIn(f'<h4 id="sidebar-username">@{self.testuser.username}</h4>', html)

    def test_user_following_as_anon(self):
        """ Test if redirects user if user is not logged in when accessing user/<user.id>/following"""

        resp = self.client.get(f'/users/{self.testuser.id}/following', follow_redirects=True)

        html = resp.get_data(as_text=True)

        self.assertEqual(resp.status_code, 200)
        self.assertIn("<h1>What's Happening?</h1>", html)

    # def test_user_following_as_user(self):
    #     with self.client as c:
    #         with c.session_transaction() as sess:
    #             sess[CURR_USER_KEY] = self.testuser.id

    #     testuser_2 = User.signup(username="testuser_2",
    #                                   email="test2@test.com",
    #                                   password="testuser2",
    #                                   image_url=None)
        
    #     db.session.add(testuser_2)
    #     db.session.commit()

    #     # create another instance of user and then create follower record
    #     follow = Follows(user_being_followed_id=self.testuser,
    #                      user_following_id=testuser_2)

    #     db.session.add(follow)
    #     db.session.commit()

    #     resp = self.client.get(f'/users/{self.testuser.id}/following')

    #     html = resp.get_data(as_text=True)

    #     self.assertEqual(resp.status_code, 200)
    #     self.assertIn(f'<a href="/users/{testuser_2.id}" class="card-link">', html)

    def test_user_followers(self):
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id

        resp = c.get(f'/users/{self.testuser.id}/followers')

        html = resp.get_data(as_text=True)

        self.assertEqual(resp.status_code, 200)
        self.assertIn('<div class="col-sm-9">', html)
    
    def test_edit_user(self):
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id

        user = self.testuser

        resp = c.post(f'/users/profile', data={'email': 'abc@yahoo.com',
                                             'image_url':'yup', 
                                             'header_image_url':'yep', 
                                             'location':'yes', 
                                             'bio':'ok',
                                             'password':'testuser'})
        
        html = resp.get_data(as_text=True)

        self.assertEqual(resp.status_code, 302)
        self.assertEqual(resp.location, f"http://localhost/users/{user.id}")
        # self.assertIn('<p class="user-location"><span class="fa fa-map-marker"></span> yes</p>', html)




        
    




    