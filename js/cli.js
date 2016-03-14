var journal = require('./journal.js').journal;
var prompt = require('prompt');
var moment = require('moment');
prompt.start();

prompt.get(['title', 'body'], function(err, result){
  var result = journal(result.[title, body]);
  var inputTitle = result.title;
  var inputBody = result.body;
  var now = moment();
  var newJournal = new Journal(inputTitle, inputBody, now);

  console.log(newJournal.title);
  console.log(newJournal.body);
  console.log(newJournal.date.format(MMM Do YY));
  console.log(newJournal.wordCount());
});



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
