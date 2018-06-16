var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName='loginRegister';

module.exports = {
  read: function() {
    return MongoClient.connect(url).then(function(client) {
        const mydb=client.db(dbName);
        var collection = mydb.collection('users');
        return collection.find().toArray();
    }).then(function(items) {
      return items;
    });
  }
};
