from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'
debug = DebugToolbarExtension(app)

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")