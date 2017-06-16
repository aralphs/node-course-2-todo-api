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
