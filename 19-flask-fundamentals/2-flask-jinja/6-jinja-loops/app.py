from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'
debug = DebugToolbarExtension(app)

@app.route('/form')
def show_form():
    return render_template('form.html')

COMPLIMENTS = ['cool', 'clever', 'tenacious', 'awesome', 'Pythonic']

# /spell/word
# /spell/bananas

@app.route('/spell-form')
def show_spell_form():
    return render_template('form_spell.html')

@app.route('/spell-word')
def spell_word():
    word = request.args['word']
    return render_template('spell_word.html', word=word)

@app.route('/spell/<word>')
def spell(word):
    return render_template('spell_word.html', word=word.upper())

@app.route('/greet')
def get_greeting():
    username = request.args['username']
    compliment = choice(COMPLIMENTS)
    return render_template('greet.html', 
                            username=username,
                            compliment=compliment)

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")

@app.route('/lucky')
def lucky_number():
    "Example of simple dynamic template"

    num = randint(1, 10)

    return render_template("lucky.html", lucky_number=num, msg="I am a msg")