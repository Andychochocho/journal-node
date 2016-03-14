exports.journal = function(title, body, date) {
    this.title = title;
    this.body = body;
    this.date = date;
  }

exports.journal.prototype.wordCount =  function () {
    var titleCount = this.title.match(/\S+/g).length;
    var bodyCount = this.body.match(/\S+/g).length;
    return titleCount + bodyCount;
  };
