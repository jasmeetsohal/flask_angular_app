from flask import Flask , render_template
from flask import jsonify 
from flask import request
from flask_cors import CORS
from bson.json_util import dumps
from dotenv import load_dotenv
from bson.objectid import ObjectId


import pymongo
import os

app = Flask(__name__ ,static_folder='public', template_folder='views') 
CORS(app)
load_dotenv()

load_dotenv(verbose=True)

load_dotenv(dotenv_path='.env')

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")

connection = pymongo.MongoClient("ds155080.mlab.com", 55080)
db = connection[DB_NAME]

def db_connect():
  try:
    if db.authenticate(DB_USER, DB_PASSWORD):
      print("MongoDB connection Succeed!")
      return True
  except:
    print("Failed to connect MongoDB!")
    return False


@app.route('/')
def landing_page():
  return render_template('index.html')



@app.route('/create',methods=['POST'])
def create_user():
  user = request.get_json()
  db_response = db.users.insert_one(user)
  if db_response.inserted_id:
    response = {"status":"insert succeed!"}
  else:
    response = {"status":"insertion failed"}
  return jsonify(response),200


@app.route('/read/<s>/<l>',methods=['GET'])
def read_user(s,l):
  users_dict = {}
  users_dict['total_count']=db.users.count_documents({})
  users_dict['data']=db.users.find({},skip=int(s),limit=int(l))
  return dumps(users_dict)

@app.route('/find/<id>',methods=['GET'])
def find_user(id):
  print (id)
  user = dumps(db.users.find_one({'_id':ObjectId(id)}))
  print(user)
  return user

@app.route('/update/<userId>',methods=['PUT'])
def update_user(userId):
  print(request.get_json())
  db_response = db.users.update_one({'_id':ObjectId(userId)},{'$set':request.get_json()})
  if db_response.matched_count == 1 and db_response.modified_count == 1:
    response = {"status":"update succeed!"}
  else:
    response = {"status":"no record found"}
        
  return jsonify(response),200

@app.route('/delete/<userId>',methods=['DELETE'])
def delete_user(userId):
  db_response = db.users.delete_one({'_id':ObjectId(userId)})
  if db_response.deleted_count == 1:
    response = {"status":"delete succeed!"}
  else:
    response = {"status":"no record found"}
    
  return jsonify(response),200
  

@app.route("/health-check")
def health_check():
    return jsonify({"health":"ok"})

if __name__ == "__main__":
    db_connect()
    app.run(debug=True)