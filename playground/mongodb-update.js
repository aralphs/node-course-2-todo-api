// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(ob);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to the database');

//Exercise
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5914d7c761c1f6d4243e1b39')
  }, {
      $set: {
        name: 'Anthony'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if (err) {
//     return console.log('Unable to connect to database');
//   }
//   console.log('Connected to the database');
//
//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5917208d4461bd27bc7c9965')
//   }, {
//       $set: {
//         completed: true
//       }
//     }, {
//       returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

  // db.close();
});
