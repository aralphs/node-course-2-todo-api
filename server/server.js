const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) =>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/122332
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //validate ID using is validate
    //404 if not validate - send back an empty body using send with no body
  if (!ObjectID.isValid(id)) {
    //console.log('ID not valid');
    return res.status(404).send();
  }

  //findbyId using ID to find document
  Todo.findById(id).then((todo) => {
  if (!todo) {
    return res.status(404).send();
  }//return console.log('Unable to find todo');
  res.send({todo});
  }).catch((e) => {
    res.status(400).send();
    // res.send({todo});
  })

  //success
  // if todo send it back
  // if no todo - send back a 404 with an empty body
  //Error
  //Send back 400 - send back nothing


  // res.send(req.params);
});

app.listen(3000, () =>{
  console.log('Started on port 3000')
});

module.exports = {app};

// var newTodo = new Todo({
//   text: 'Something to do'
// });
//
// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// User
//email  - require it -trim it - set to string, set min of 1

// var newUser = new User({
//   email: '    test@test.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save User', e);
// });
