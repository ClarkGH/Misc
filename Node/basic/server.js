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

//GET routes
//index page route (http://localhost:3000/)
router.get('/', function(req, res) {
  res.send('Welcome to the index page!');
});

//about page route (http://localhost:3000/about)
router.get('/about', function(req, res) {
  res.send('Welcome to the about page!');
});

// put these routes in our app
app.use('/', router);

//Server
app.listen(port);
console.log('This is running on port' + port);