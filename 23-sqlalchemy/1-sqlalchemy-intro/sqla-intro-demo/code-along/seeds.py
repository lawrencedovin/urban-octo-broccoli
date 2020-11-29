""""Seed file to make sample data for pets db."""

from models imort Pet, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
Pet.query.delete()

# Add pets
winston = Pet(name='Winston', species='gorilla', hunger=80)
hammy = Pet(name='Hammy', species='hamster', hunger=40)
chimichanga = Pet(name='Chimichanga', species='cat', hunger=60)

# Add new object to session, so they'll persist
db.session.add(winston)
db.session.add(hammy)
db.session.add(chimichanga)

# Commit confirms changes and makes it permanent
db.session.commit()