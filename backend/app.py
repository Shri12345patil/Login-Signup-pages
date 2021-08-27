from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:root@localhost/task1.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
# >>> from app import db
# >>> db.create_all() 

class Students(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))
    password = db.Column(db.String(50))

    def __init__(self,username,password):
        self.username = username
        self.password = password

class StudentSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username','password')

student_schema = StudentSchema()
student_schema = StudentSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_students():
    all_student = Students.query.all()
    results = student_schema.dump(all_student)
    return jsonify(results)

@app.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    student = Students.query.get(id)
    student_schema = StudentSchema()
    return student_schema.jsonify(student)


@app.route('/add', methods = ['POST'])
def add_student():
    username = request.json['username']
    password = request.json['password']

    students = Students(username, password)
    db.session.add(students)
    db.session.commit()
    return student_schema.jsonify(students)

@app.route('/update/<id>/', methods = ['PUT'])
def update_student(id):
    student = Students.query.get(id)

    username = request.json['username']
    password = request.json['password']

    student.username = username
    student.password = password

    db.session.commit()
    return student_schema.jsonify(student)

@app.route('/delete/<id>/', methods = ['DELETE'])
def student_delete(id):
    student = Students.query.get(id)
    db.session.delete(student)
    db.session.commit()
    return student_schema.jsonify(student)


@app.route('/sign_in', methods=[ "POST"])
def sign_in():
    username_entered =  request.json['username']
    password_entered = request.json['password']

    user = Students.query.filter(Students.username == username_entered).first()
    if user and user.password == password_entered:
        return jsonify({'signed_in': "True", 
        "id": user.id,
        "username": user.username,
        "password": user.password
        })
    return jsonify({'signed_in': "False"})


if __name__ == "__main__":
    app.run(debug=True)