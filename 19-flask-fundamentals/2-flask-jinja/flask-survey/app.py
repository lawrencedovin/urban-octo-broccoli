from flask import Flask, request, render_template, flash
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample
from operator import itemgetter
from surveys import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'oh-so-secret'
debug = DebugToolbarExtension(app)

RESPONSES = []
# answers to the survey questions stored in responses will look like ['Yes', 'No', 'Less than $10,000', 'Yes']

@app.route('/')
def get_home():
    title = surveys["satisfaction"].title
    instructions = surveys["satisfaction"].instructions

    return render_template('home.html' , title=title, instructions=instructions)

@app.route('/questions/<int:id>')
def get_question(id):
    return render_template('question.html', question=id)


