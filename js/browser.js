var journal = require('./../js/journal.js').journal;
var moment = require('moment');

$(document).ready(function(){
  $("#journal").submit(function() {
    var title = $("#title").val();
    var body = $("#body").val();
    var now = moment();
    var entry = new Journal(title, body, now);
    $("#entries").append("<li>" + entry.title + " Time: " + entry.date.format("MMM Do YY") + ": " + entry.body + " Word Count: " + entry.wordCount() + "</li>");
    event.preventDefault();
  });
});
