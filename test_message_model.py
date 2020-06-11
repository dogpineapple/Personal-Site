"""Message model tests."""

# run these tests like:
#
#    python -m unittest test_message_model.py


import os
from unittest import TestCase
from sqlalchemy.exc import IntegrityError

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

class MessageModelTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""
        # goes back to the state without the instances we added through sqlalchemy's `db.session.add` like in our tests 
        # in line 128 
        db.session.rollback()

        User.query.delete()
        Message.query.delete()
        Follows.query.delete()

        self.client = app.test_client()
        
    
    def test_user_messages(self):
        """ Test to see if a message can be created by a user """

        u1 = User.signup(
            email="TESTINGGGG@test.com",
            username="testuser",
            password="HASHED_PASSWORD",
            image_url="/static/images/default-pic.png"
        )

        db.session.add(u1)
        db.session.commit()

        message = Message(
            text="imsoooocool",
            user_id=u1.id
        )

        db.session.add(message)
        db.session.commit()

        self.assertEqual(u1.messages, [message])

    def test_delete_user(self):
        """ Test deleting user to delete all user's messages """ 

        u1 = User.signup(
            email="TESTINGGGG@test.com",
            username="deleteuser",
            password="HASHED_PASSWORD",
            image_url="/static/images/default-pic.png"
        )

        db.session.add(u1)
        db.session.commit()

        message = Message(
            text="imsofrikkencool",
            user_id=u1.id
        )

        db.session.add(message)
        db.session.commit()
        
        delete_user = User.query.filter(User.username=="deleteuser").first()

        # see line 97 of models.py
        db.session.delete(delete_user)
        db.session.commit()

    def test_delete_message(self):
        """ Test to delete message from db """

        u1 = User.signup(
            email="TESTINGGGG@test.com",
            username="testuser",
            password="HASHED_PASSWORD",
            image_url="/static/images/default-pic.png"
        )

        db.session.add(u1)
        db.session.commit()

        message = Message(
            text="imsoocool",
            user_id=u1.id
        )

        db.session.add(message)
        db.session.commit()

        db.session.delete(message)
        db.session.commit()

        self.assertEqual(u1.messages, [])

    def test_missing_text(self):
        """ Test invalid text input """

        u1 = User.signup(
            email="TESTINGGGG@test.com",
            username="testuser",
            password="HASHED_PASSWORD",
            image_url="/static/images/default-pic.png"
        )

        db.session.add(u1)
        db.session.commit()

        message = Message(user_id=u1.id)

        with self.assertRaises(IntegrityError):
            db.session.add(message)
            db.session.commit()

        
    





