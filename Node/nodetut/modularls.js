var modularLibrary = require('./modularlib.js');
var dir = process.argv[2];
var ext = process.argv[3];

modularLibrary(dir, ext, function(err, data) {
  for (i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});

// Their solution
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })