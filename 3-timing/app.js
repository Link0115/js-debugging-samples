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
      self.ui.bindTeamClick();
  });
  self.ui.onTeamClick = function (teamIndex) { self.onTeamClick(teamIndex); }
  self.ui.onConference = function (conf) { self.onConference(conf) };
  return self;
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
app.SummaryModel.prototype.onTeamClick = function (teamIndex) {
  var self = this;
  var team = self.teams[teamIndex];
  self.ui.drawTeamDetail(team);
}
app.ui.bind();
app.Summary = new app.SummaryModel(app.ui);
