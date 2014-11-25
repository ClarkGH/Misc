var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//Routes
app.get('/sample', function(req, res) {
  res.send('can you see me?');
});

//Server
app.listen(port);
console.log('This is running on port' + port);