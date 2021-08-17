import flask
from flask_cors import CORS, cross_origin
from flask import request, jsonify

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
books = [
    {'id': 0,
     'username': 'abc',
     'password': 'abcdef'},
    {'id': 1,
     'username': 'xyz',
     'password': 'wuxxyz'},
    {'id': 2,
     'username': 'pqr',
     'password': 'opqrst'}
]


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
<p>A prototype API for distant reading of science fiction novels.</p>'''


@app.route('/api/books/all', methods=['GET'])
def api_all():
    return jsonify(books)


@app.route('/api/books', methods=['GET'])
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."

    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for book in books:
        if book['id'] == id:
            results.append(book)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(results)

app.run()

# http://127.0.0.1:5000/api/books?id=1
# http://127.0.0.1:5000/api/books/all