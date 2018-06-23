var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName='loginRegister';
var mongodb = require('mongodb');

//   read: function() {
//     return MongoClient.connect(url).then(function(client) {
//         const mydb=client.db(dbName);
//         var collection = mydb.collection('users');
//         return collection.find().toArray();
//     })
//   }
// read: new Promise((resolve,reject)=>{
//   MongoClient.connect(url).then((client)=>{
//     console.log('read called')
//     const mydb=client.db(dbName);
//     var collection = mydb.collection('users');
//     resolve(collection.find().toArray());
//   })
// })
module.exports={
  read: function() {
    return MongoClient.connect(url).then(function(client) {
      console.log('read called')
      const mydb=client.db(dbName);
      var collection = mydb.collection('users');
      return collection.find().toArray();
    })
  },
  findById: function(id) {
    return MongoClient.connect(url).then(function(client) {
      console.log('read by id called')
      const mydb=client.db(dbName);
      var collection = mydb.collection('users');
      return collection.find({
        _id : new mongodb.ObjectID(id)
      }).toArray();
    })
  },
  insert: function(username, pwd){
    return MongoClient.connect(url).then(function(client){
      console.log('insert called')
      const mydb=client.db(dbName);
      var collection=mydb.collection('users');
      collection.insertOne({
        'username':username,
        'password':pwd
      })
    })
  },
  delete: function(id){
    return MongoClient.connect(url).then(function(client){
      console.log('delete called')
      const mydb=client.db(dbName);
      var collection=mydb.collection('users');
      collection.deleteOne({
        '_id':new mongodb.ObjectID(id)
      })
    })
  },
  update: function(id,username,pwd){
    return MongoClient.connect(url).then(function(client){
      console.log('delete called')
      const mydb=client.db(dbName);
      var collection=mydb.collection('users');
      collection.update({
        '_id':new mongodb.ObjectID(id)
      },{
        username:username,
        password:pwd
      })
    })
  }
}
