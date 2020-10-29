from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

MOVIES = {'Amadeus', 'Chicken Run', 'Dancing With Wolves'}

@app.route('/')
def get_home():
    return render_template('home.html')

@app.route('/old-home-page')
def redirect_to_home():
    """Redirects to new home page"""
    flash('That page has moved! This is our new home page!')
    return redirect('/')

@app.route('/movies')
def show_all_movies():
    """Show list of all movies"""
    return render_template('movies.html', movies=MOVIES)

@app.route('/movies/new', methods=['POST'])
def add_movie():
    title = request.form['title']
    # Add to pretend DB
    if title in MOVIES:
        flash('Movie Already Exist!', 'error')
    else:
        MOVIES.add(title)
        flash(f'Added movie {title} to list', 'success')
    import pdb
    pdb.set_trace()
    return redirect('/movies')