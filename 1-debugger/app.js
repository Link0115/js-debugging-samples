/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
app.SearchModel = function (ui) {
  var self = this;
  self.ui = ui;
  self.allStandings = [];
  self.filterResults = [];
  self.filterParams = null;
  self.ui.onFilter = function (wins, greaterThan) { self.onFilter(wins, greaterThan) };
  self.ui.onSort = self.onSort;
  self.load();
  return self;
};
app.SearchModel.prototype.load = function () {
  var self = this;
  $.getJSON("/nflstandings/2014").done(function (data) {
    self.allStandings = data;
    self.sortByWins(false);
    self.filter();
    self.ui.drawResults(self.filterResults);
  });
};
app.SearchModel.prototype.onFilter = function (wins, greaterThan) {
  var self = this;
  self.filterParams = { wins: wins, greaterThan: greaterThan };
  self.filter();
}
app.SearchModel.prototype.filter = function () {
  var self = this;
  if (self.filterParams) {
    self.filterResults = [];
    for (var i = 0; i < self.allStandings.length; ++i) {
      var item = self.allStandings[i];
      if (self.filterParams.greaterThan) {
        if (item.wins > self.filterParams.wins) {
          self.filterResults.push(item);
        }
      } else if (!self.filterParams.greaterThan) {
        if (item.win < self.filterParams.wins) {
          self.filterResults.push(item);
        }
      }
    }
  } else {
    self.filterResults = self.allStandings;
  }
  self.ui.drawResults(self.filterResults);
}
app.SearchModel.prototype.onSort = function (ascending) {
  var self = this;
  self.sortByWins(ascending);
  self.filter();
  self.ui.drawResults(self.filterResults);
}
app.SearchModel.prototype.sortByWins = function (ascending) {
  var self = this;
  if (ascending) {
    self.allStandings.sort(function (a, b) { return a.wins - b.wins; });
  } else {
    self.allStandings.sort(function (a, b) { return b.wins - a.wins; });
  }
}
$(function () {
  app.ui.bind();
  app.Search = new app.SearchModel(app.ui);
});
