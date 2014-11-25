var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//Routes
var router = express.Router();

//route middleware on every request (run middleware before routes)
router.use(function(req, res, next) {
  //route middleware
  console.log(req.method, req.url);
  //continue on to the routes
  next();
});

//make route middleware validate :name
router.param('name', function(req, res, next, name) {
  //validations go here
  //log to show it's working
  console.log('we are now validating ' + name);

  //save name in req
  req.name = name;
  //go to next
  next();
});

//GET routes
//index page route (http://localhost:3000/)
router.get('/', function(req, res) {
  res.send('Welcome to the index page!');
});

//about page route (http://localhost:3000/about)
router.get('/about', function(req, res) {
  res.send('Welcome to the about page!');
});

//route with params (http://localhost:3000/hello/:name)
router.get('/hello/:name', function(req, res) {
  res.send('Hello ' + req.name + '!');
});

// put these routes in our app
app.use('/', router);

//Server
app.listen(port);
console.log('This is running on port' + port);