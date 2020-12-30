from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()

bcrypt = Bcrypt()


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.Text, unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)

    @classmethod
    def register(cls, username, password):
        """Register user w/ hashed password & return user."""

        hashed = bcrypt.generate_password_hash(password)
        # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")

        # return instance of user w/ username and hashed password
        return cls(username=username, password=hashed_utf8)
    
    @classmethod
    def authenticate(cls, username, password):
        """Validate that user exists & password is correct.
           Return user if valid; else return False.
        """

        user = User.query.filter_by(username=username).first()

        # Input form password gets hashed and checked with the stored hashed password
        if user and bcrypt.check_password_hash(user.password, password):
            # return user instance
            return user
        else: 
            return False