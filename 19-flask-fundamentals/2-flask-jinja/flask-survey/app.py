from flask import Flask, request, render_template, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample
from operator import itemgetter
from surveys import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'oh-so-secret'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

responses = []
SATISFACTION_SURVEY = surveys["satisfaction"]
# answers to the survey questions stored in responses will look like ['Yes', 'No', 'Less than $10,000', 'Yes']

@app.route('/')
def get_home():
    title = SATISFACTION_SURVEY.title
    instructions = SATISFACTION_SURVEY.instructions

    return render_template('home.html' , title=title, instructions=instructions)

@app.route('/questions/<int:id>')
def get_question(id):
    question = SATISFACTION_SURVEY.questions[id].question
    choices = SATISFACTION_SURVEY.questions[id].choices
    return render_template('question.html', question=question, choices=choices, id=id)


@app.route('/answer', methods=['POST'])
def get_answer():
    response = request.form["answer"]
    responses.append(response)
    if len(SATISFACTION_SURVEY.questions) > len(responses):
        return redirect(f'/questions/{len(responses)}')
    else :
        return redirect('/complete')
    
@app.route('/complete')
def complete_survey():
    return render_template('complete.html')



