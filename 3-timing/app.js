/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
app.SummaryModel = function (ui) {
  var self = this;
  self.ui = ui;
  self.teams = [];
  self.onConference("afc").done(function () {
    //setTimeout(function () {
      self.ui.bindTeamClick();
    //}, 100);
  });
  self.ui.onTeamClick = function () { alert('team clicked'); }
  self.ui.onConference = function (conf) { self.onConference(conf) };
  return self;
};
app.SummaryModel.prototype.load = function (afc) {
  var self = this;
};
app.SummaryModel.prototype.onConference = function (conf) {
  var self = this;
  self.ui.drawResults([]);
  return $.getJSON("/nflstandings/2014/" + window.encodeURIComponent(conf)).done(function (data) {
    self.teams = data;
    self.teams.sort(function (a, b) { return b.wins - a.wins; });
    self.ui.drawResults(self.teams);
  });
}
app.ui.bind();
app.Summary = new app.SummaryModel(app.ui);
