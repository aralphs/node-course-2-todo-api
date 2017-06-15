// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(ob);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to the database');

  //Exercises
  //deleteMany
  // db.collection('Users').deleteMany({name: 'Anthony'}).then((result) => {
  //   console.log(result);
  // });


  // find and delete by object ID
  db.collection('Users').findOneAndDelete({
  _id: new ObjectID ('5914d8a32e2948d50e574e33')
  }).then((result) => {
     console.log(result);
   });

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('Users').find({
  //   name: 'Anthony'
  // }).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Users', err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID ('591718454461bd27bc7c9693')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.close();
});
