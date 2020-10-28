from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'
debug = DebugToolbarExtension(app)

@app.route('/form')
def show_form():
    return render_template('form.html')

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")

@app.route('/lucky')
def lucky_number():
    "Example of simple dynamic template"

    num = randint(1, 100)

    return render_template("lucky.html", lucky_number=num, msg="You sooo lucky")