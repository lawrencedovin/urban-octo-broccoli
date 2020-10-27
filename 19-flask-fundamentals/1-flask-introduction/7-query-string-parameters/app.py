from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Guacamali!</h1>
            <p>I am the / page :3</p>
            <a href='/hello'>Visit HELLO page</a>
        </body>
    </html>
    """
    return html

@app.route('/hello')
def say_hello():
    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>I am the hello page :3</p>
        </body>
    </html>
    """
    return html

@app.route('/goodbye')
def say_bye():
    return "Good bye!"

@app.route('/search')
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    return f"<h1>Search Results For: {term}</h1><p>Sorting by: {sort}</p>"