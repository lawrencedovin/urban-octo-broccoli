from flask import Flask, render_template, request
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"

debug = DebugToolbarExtension(app)


@app.route("/")
def ask_questions():
    """Generate and show form to ask words."""

    # in prompts: ['place', 'noun', 'verb', 'adjective', 'plural_noun']
    prompts = story.prompts
    return render_template("questions.html", prompts=prompts)


@app.route("/story")
def show_story():
    """Show story result."""

    # in text example: Once upon a time in a long-ago Nigeria, there lived a
    # large Fast Dog. It loved to Fishing Cats.

    # request.args are the key value pairs passed from the form
    # request.args example: ([('place', 'Nigeria'), ('noun', 'Dog'), ('verb', 'Fishing'), ('adjective', 'Fast'), ('plural_noun', 'Cats')])
    print(f'I am {request.args}')
    # generate replaces all of the keys in the text with their values
    text = story.generate(request.args)

    return render_template("story.html", text=text)