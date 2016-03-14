function Journal(title, body) {
    this.title = title;
    this.body = body;
  }

  Journal.prototype.wordCount = function () {
    var titleCount = this.title.match(/\S+/g).length;
    var bodyCount = this.body.match(/\S+/g).length;
    return titleCount + bodyCount;
  };

$(document).ready(function(){

  $("#journal").submit(function() {
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Journal(title, body);
    $("#entries").append("<li>" + entry.title + ": " + entry.body + " Word Count: " + entry.wordCount() + "</li>");
    event.preventDefault();
  });
});
