exports.journal = function(title, body) {

  function Journal(title, body) {
    this.title = title;
    this.body = body;
  }

  Journal.prototype.wordCount = function () {
    var titleCount = this.title.match(/\S+/g).length;
    var bodyCount = this.body.match(/\S+/g).length;
    return titleCount + bodyCount;
  }
};
