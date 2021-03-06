from flask import Flask, request, render_template, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample
from operator import itemgetter
from surveys import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'oh-so-secret'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# debug = DebugToolbarExtension(app)

responses = []
SATISFACTION_SURVEY = surveys["satisfaction"]
QUESTIONS = SATISFACTION_SURVEY.questions

@app.route('/')
def get_home():
    title = SATISFACTION_SURVEY.title
    instructions = SATISFACTION_SURVEY.instructions
    return render_template('home.html' , title=title, instructions=instructions)

@app.route('/questions/<int:id>')
def get_question(id):
    try:
        question = QUESTIONS[id].question
        choices = QUESTIONS[id].choices
        return render_template('question.html', question=question, choices=choices, id=id)
    except:
        flash(f'Incorrect ID entered: {id}', 'error')
        return redirect(f'/questions/{len(responses)}')

@app.route('/answer', methods=['POST'])
def get_answer():
    response = request.form['answer']
    responses.append(response)
    if len(QUESTIONS) == len(responses):
        responses.clear()
        return redirect('/complete')
    else:
        return redirect(f'/questions/{len(responses)}')
        
    
@app.route('/complete')
def complete_survey():
    return render_template('complete.html')

# 404 Error handling
@app.errorhandler(404) 
def not_found(e): 
  return render_template('404.html') 

