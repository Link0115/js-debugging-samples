/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
$(function () {
  $("#throwBtn").on("click", function throwException () {
    prseInt('12', 10);
  });
  $("#doNotThrowBtn").on("click", function doNotThrow() {
    try {
      prseInt('12', 10);
      $("#doNotThrowBtn").css("background-color", "blue");
    } catch (e) {}
  }); 
});
