"""User model tests."""

# run these tests like:
#
#    python -m unittest test_user_model.py


import os
from unittest import TestCase

from models import db, User, Message, Follows

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data

db.create_all()


class UserModelTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""

        User.query.delete()
        Message.query.delete()
        Follows.query.delete()

        self.client = app.test_client()

    def test_user_model(self):
        """Does basic model work?"""

        u = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )

        db.session.add(u)
        db.session.commit()

        # User should have no messages & no followers
        self.assertEqual(len(u.messages), 0)
        self.assertEqual(len(u.followers), 0)

    def test_user_repr_method(self):
        """Does the __repr__ method work?"""
        u = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )

        db.session.add(u)
        db.session.commit()

        self.assertEqual(len(u.messages), 0)
        self.assertEqual(len(u.followers), 0)
        self.assertEqual(u.__repr__(), f"<User #{u.id}: {u.username}, {u.email}>")

    def test_is_following(self):
        """Test if following works"""

        u1 = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )

        u2 = User(
            email="test2@test.com",
            username="testuser2",
            password="HASHED_PASSWORD2"
        )

        db.session.add(u1)
        db.session.add(u2)
        db.session.commit()

        follow = Follows(
            user_being_followed_id = u2.id,
            user_following_id = u1.id
        )

        db.session.add(follow)
        db.session.commit()

        self.assertTrue(u1.is_following(u2), True)
        self.assertFalse(u2.is_following(u1), False)
    
    def test_is_followed_by(self):
        """Test if is followed by works."""

        u1 = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )

        u2 = User(
            email="test2@test.com",
            username="testuser2",
            password="HASHED_PASSWORD2"
        )

        db.session.add(u1)
        db.session.add(u2)
        db.session.commit()

        follow = Follows(
            user_being_followed_id = u2.id,
            user_following_id = u1.id
        )

        db.session.add(follow)
        db.session.commit()

        self.assertFalse(u1.is_followed_by(u2), False)
        self.assertTrue(u2.is_followed_by(u1), True)

    def test_new_user_signup(self):
        """Test if new user is created after successful signup"""

        u1 = User.signup(
            email="test@test.com",
                username="testuser",
                password="HASHED_PASSWORD",
                image_url="/static/images/default-pic.png"
        )

        db.session.add(u1)
        db.session.commit()
        
        self.assertIsInstance(u1, User)

    def test_invalid_new_user_signup(self):
        """Test new user validations."""

        try: 
            u1 = User.signup(
                username="testuser",
                password="HASHED_PASSWORD",
                image_url="/static/images/default-pic.png"
                )

            db.session.add(u1)
            db.session.commit()
        
        except:
            failed = "failed test"
        
        self.assertEqual(failed, "failed test")

    def test_authenticate_user(self):
        """Test if authenticating user works."""

        u1 = User.signup(
            email="TESTINGGGG@test.com",
            username="testuser",
            password="HASHED_PASSWORD",
            image_url="/static/images/default-pic.png"
        )

        db.session.add(u1)
        db.session.commit()

        self.assertEqual(u1.authenticate("testuser", "HASHED_PASSWORD"), u1)
        self.assertFalse(u1.authenticate("WRONG", "HASHED_PASSWORD"), u1)
        self.assertFalse(u1.authenticate("testuser", "WRONG_PASSWORD"), u1)


