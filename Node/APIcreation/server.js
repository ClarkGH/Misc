//packages
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

//bodyParser() config to allow getting POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

//Routes for API
var router = express.Router();

//GET Route
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to my Node-based API'});
});

//Route registration
app.use('/api', router);

//Server
app.listen(port);
console.log('The port you are using is: ' + port)