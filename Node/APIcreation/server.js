//packages
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Bacon       = require('./models/bacon');

//database
mongoose.connect('mongodb://clarkgh:iloveit@proximus.modulusmongo.net:27017/tiH8ohod');

//bodyParser() config to allow getting POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

//Routes for API
var router = express.Router();

//Request middleware
router.use(function(req, res, next) {
  console.log('This is working');
  next();
});

//GET index route
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to my Node-based API'});
});

router.route('/bacon')
  //POST
  .post(function(req, res) {

    var bacon = new Bacon();
    bacon.name = req.body.name;

    bacon.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'New bacon cooked!' });
    });
  })

  //GET all
  .get(function(req, res) {
    Bacon.find(function(err, bacon) {
      if (err)
        res.send(err);

      res.json(bacon);
    });
  });

//GET bacon with specific id
router.route('/bacon/:bacon_id')
  .get(function(req, res) {
    Bacon.findById(req.params.bacon_id, function(err, bacon) {
      if (err)
        res.send(err);
      res.json(bacon);
    });
  });

//Route registration
app.use('/api', router);

//Server
app.listen(port);
console.log('The port you are using is: ' + port);