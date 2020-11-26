from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_shop_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'cluckcluck'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home_page():
    """Shows home page"""
    return render_template('home.html')

@app.route('/list')
def list_pets():
    """List pets and show add form."""

    pets = Pet.query.all()
    return render_template('list.html', pets=pets)

@app.route('/<int:pet_id>')
def show_pet_details(pet_id):
    """Show specific pet details"""
    pet = Pet.query.get_or_404(pet_id)
    return render_template('pet-details.html', pet=pet)
