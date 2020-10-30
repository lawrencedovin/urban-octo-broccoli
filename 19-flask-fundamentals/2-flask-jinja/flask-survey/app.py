from flask import Flask, request, render_template, flash
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample
from surveys import Question, Survey

app = Flask(__name__)
app.config['SECRET_KEY'] = 'oh-so-secret'
debug = DebugToolbarExtension(app)

RESPONSES = []
# answers to the survey questions stored in responses will look like ['Yes', 'No', 'Less than $10,000', 'Yes']

@app.route('/')
def get_home():
    
    satisfaction_survey = Survey(
        "Customer Satisfaction Survey",
        "Please fill out a survey about your experience with us.",
        [
            Question("Have you shopped here before?"),
            Question("Did someone else shop with you today?"),
            Question("On average, how much do you spend a month on frisbees?",
                    ["Less than $10,000", "$10,000 or more"]),
            Question("Are you likely to shop here again?"),
        ])

    title, instructions, questions = satisfaction_survey

    return render_template('home.html' , title=title, instructions=instructions)

