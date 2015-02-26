/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
app.ui = {};
app.ui.clear = function () {
  $("#name").val("");
  $("#city").val("Los Angeles");
  $("#owner").val("");
}
app.ui.bind = function () {
  $("#add").on("click", function () {
    var onAdd = app.ui.onAdd;
    if (onAdd) {
      var formData = {
        name: $("#name").val(),
        city: $("#city").val(),
        owner: $("#owner").val()
      };
      onAdd(formData);
    }
  });
  $("#clear").on("click", function () {
     var onClear = app.ui.onClear;
     if (onClear) {
       onClear();
     }
  });
}
