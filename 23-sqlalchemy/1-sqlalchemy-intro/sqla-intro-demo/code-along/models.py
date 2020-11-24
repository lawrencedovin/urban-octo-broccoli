from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

# MODELS GO BELOW!
class Pet(db.Model):

    def __repr__(self):
        pet = self
        return f'<Pet id={pet.id} name={pet.name} species={pet.species} hunger={pet.hunger}>'
    
    def get_data():
        return Pet.query.all()
    
    def greet(self):
        pet = self
        if pet.name == 'Cowboy':
            return f'Yeehaw mah name is {pet.name} and I am a {pet.species} from Texas.'
        return f'HI my name is {pet.name}, and I am a {pet.species} pls feed me.'

    __tablename__ = 'pets'

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
                    
