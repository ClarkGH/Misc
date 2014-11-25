var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//server config
mongoose.connect('mongodb://clarkgh:iloveit@proximus.modulusmongo.net:27017/tiH8ohod');

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
// this will log every request to the console

app.use(bodyParser.urlencoded({'extended':'true'}));
//parse in x-www-form-urlencoded
app.use(bodyParser.json());
//parse app in json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//parse vnd.api as json
app.use(methodOverride());

//Models
var Todo = mongoose.model('Todo', {
  test : String
});
//TODO routes ===========================
  //get all
  app.get('/api/todos', function(req, res) {
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)

      res.json(todos);
    });
  });

  //create todo
  app.post('/api/todos', function(req, res) {

    Todo.create({
      text : req.body.text,
      done : false
    }, function(err, todo) {
      if (err)
        res.send(err);

      //get all todos after creates
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });

  });

  //delete todo
app.delete('/api/todos/:todo_id', function(req, res) {
  Todo.remove({
    _id : req.params.todo_id
  }, function(err, todo) {
    if (err)
      res.send(err);

    //get all todos after delete

    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos);
    });
  });
});

//==============================

//Server
app.listen(3000);
console.log("This app is running on port 3000");