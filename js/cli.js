var journal = require('./journal.js').journal;
var prompt = require('prompt');
prompt.start();

// prompt.get('title', function(err, result) {
//   var result = journal(result.title);
//   result.forEach(function(element) {
//     console.log(element);
//   });
// });
// prompt.get('body', function(err, result) {
//   var result = journal(result.body);
//   result.forEach(function(element) {
//     console.log(element);
//   });
// });

var titleGoal = prompt.get("Enter your title");
var titleResult = new journal("titleGoal", "body");
// var bodyGoal = prompt.get("Enter your body")
// var bodyResult = new journal(bodyResult);
console.log(titleResult);
