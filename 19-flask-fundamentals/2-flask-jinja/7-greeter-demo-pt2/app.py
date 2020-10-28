from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'
debug = DebugToolbarExtension(app)

COMPLIMENTS = ['cool', 'clever', 'tenacious', 'awesome', 'Pythonic']

@app.route('/form')
def show_form():
    return render_template('form.html')

@app.route('/greet')
def get_greeting():
    username = request.args['username']
    compliment = choice(COMPLIMENTS)
    return render_template('greet.html', 
                            username=username,
                            compliment=compliment)

@app.route('/form-2')
def show_form_2():
    return render_template('form_2.html')

@app.route('/greet-2')
def get_greeting2():
    username = request.args['username']
    wants_compliment = request.args.get('wants_compliments')
    compliments = sample(COMPLIMENTS, 3)
    return render_template('greet_2.html', 
                            username=username,
                            compliments=compliments,
                            wants_compliment=wants_compliment)

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")