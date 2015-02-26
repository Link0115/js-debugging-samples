/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
app.SearchModel = function (ui) {
  var self = this;
  self.ui = ui;
  self.allStandings = [];
  self.load();
  return self;
};
app.SearchModel.prototype.load = function () {
  var self = this;
  var request = $.getJSON("/nflstqqndings/2014");
  request.done(function (data) {
    self.allStandings = data;
    self.ui.drawResults(self.allStandings);
    self.ui.doneLoading();
  });
};
$(function () {
  app.Search = new app.SearchModel(app.ui);
});
