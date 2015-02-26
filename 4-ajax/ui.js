/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
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
app.ui.doneLoading = function () {
  $("[data-show-after-load='false']").hide();
  $("[data-show-after-load='true']").show();
}
