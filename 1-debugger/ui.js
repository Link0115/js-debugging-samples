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
app.ui.bind = function () {
  $("#filter").on("click", function () {
    var onFilter = app.ui.onFilter;
    if (onFilter) {
      var greater = $("#homeGreater").prop("checked");
      var wins = $("#wins").val();
      if (wins) {
        onFilter(parseInt(wins, 10), greater);
      }
    }
  });
  $("#sortOrder").on("click", function () {
     var onSort = app.ui.onSort;
     if (onSort) {
       var sortDirection = true;
       if ($("#sortOrder").data("sortDesc") === true) {
         sortDirection = false;
         $("#sortOrder").text("Sort By Wins Ascending");
         $("#sortOrder").data("sortDesc", false);
       } else {
         $("#sortOrder").text("Sort By Wins Descending");
         $("#sortOrder").data("sortDesc", true);
       }
       onSort(sortDirection);
     }
  });
}
