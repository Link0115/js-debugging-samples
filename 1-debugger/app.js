/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = {};
app.SearchModel = function (ui) {
  var self = this;
  this.ui = ui;
  this.allStandings = [];
  this.filterResults = [];
  this.load();
  return this;
};
app.SearchModel.prototype.load = function () {
  var self = this;
  $.getJSON("/nflstandings/2014").done(function (data) {
    self.allStandings = data;
    self.sortByWins(false);
    self.filterResults = self.allStandings;
    self.ui.drawResults(self.filterResults);
  });
};
app.SearchModel.prototype.sortByWins = function (ascending) {
  var self = this;
  if (ascending) {
    self.allStandings.sort(function (a, b) { return a.wins - b.wins; });
  } else {
    self.allStandings.sort(function (a, b) { return b.wins - a.wins; });
  }
}
app.ui = {};
app.ui.drawResults = function (resultList) {
  $("#results").children().remove();
  if (resultList.length) {
    for (var i = 0; i < resultList.length; ++i) {
      $("<li>").text(resultList[i].team + " (" + resultList[i].wins + ")").appendTo("#results");
    }
  } else {
    $("<li>").text("No Results").appendTo("#results");
  }
}
$(function () {
  app.Search = new app.SearchModel(app.ui);
});
var increase = function () {
  $.getJSON("/test").done(function (data) {
    alert('Loaded ' + data.FirstName);
  }).fail(function () {
     //alert('Failed');
  });
};
$(function () {
  $("#increase").on("click", increase);
});
