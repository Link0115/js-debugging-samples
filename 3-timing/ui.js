/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
app.ui = {};
app.ui.drawResults = function (resultList) {
  var $teamRows = $("#teamRows");
  $teamRows.children().remove();
  if (resultList.length) {
    for (var i = 0; i < resultList.length; ++i) {
      var $tr = $("<tr>");
      $("<td>").text(resultList[i].team).appendTo($tr);
      $("<td>").text(resultList[i].wins).appendTo($tr);
      $tr.appendTo($teamRows);
    }
  }
}
app.ui.bindTeamClick = function () {
  $("#teamRows tr").on("click", function () {
    var onTeamClick = app.ui.onTeamClick;
    if (onTeamClick) {
      onTeamClick();
    }
  });
}
app.ui.bind = function () {
  $("[name='selectedConf']").on("change", function () {
    var onConference = app.ui.onConference;
    if (onConference) {
      onConference($(this).val());
    }
  });  
}
