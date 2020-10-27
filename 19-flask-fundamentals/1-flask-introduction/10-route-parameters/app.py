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

# @app.route('/post', methods=['POST'])
# def post_demo():
#     return "YOU MADE A POST REQUEST!"

# @app.route('/post', methods=['GET'])
# def get_demo():
#     return "YOU MADE A GET REQUEST!"

@app.route("/add-comment")
def add_comment_form():
    """Show form for adding a comment."""

    return """
        <h1>Add Truthful Comment</h1>
        <form method="POST">
            <input name="username" placeholder="Username">
            <input name="comment" placeholder="Comment">
            <button>Submit</button>
        </form>
    """

@app.route("/add-comment", methods=["POST"])
def add_comment():
    """Handle adding comment."""
    username = request.form["username"]
    comment = request.form["comment"]

    # TODO: save that into a database!

    return f"""
        <h1>SAVED YOUR COMMENT</h1>
        <ul>
            <li>Username: {username}</li>
            <li>Comment: {comment}</li>
        </ul>
        """

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"<h1>You are now on the subreddit: {subreddit}</h1>"

@app.route('/r/<subreddit>/comments/<int:comment_id>')
def show_comments(subreddit, comment_id):
    return f"<h1>Viewing comments for post with id: {comment_id} from {subreddit} Subreddit</h1>"

POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo!",
    3: "Double rainbow",
    4: "YOLO OMG"
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, "POST NOT FOUND")
    return f"<h1>{post}</h1>"

# http://toys.com/shop/spinning-top?color=red

# /r/AskReddit/search/?q=chickens&restrict_sr=1
# /r/<subreddit>/search