from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

# MODELS GO BELOW!
class Pet(db.Model):
    __tablename__ = 'pets'

    @classmethod
    def get_by_species(cls, species):
        return cls.query.filter_by(species=species).all()
    
    @classmethod
    def get_all_hungry(cls):
        return cls.query.filter(cls.hunger > 10).all()

    def __repr__(self):
        pet = self
        return f'<Pet id={pet.id} name={pet.name} species={pet.species} hunger={pet.hunger}>'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)
    species = db.Column(db.String(30),
                        nullable=True)
    hunger = db.Column(db.Integer,
                       nullable=False,
                       default=20)
    
    def greet(self):
        pet = self
        if pet.name == 'Cowboy':
            return f'Yeehaw mah name is {pet.name} and I am a {pet.species} from Texas.'
        return f'HI my name is {pet.name}, and I am a {pet.species} pls feed me.'
    
    def feed(self, amt=20):
        """Update hunger based off of amt"""
        pet = self
        pet.hunger -= amt
        """Takes the max of each value if negative takes the new max value of 0"""
        self.hunger = max(self.hunger, 0)
                    
