/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var currentNum = 1;
var totalClicks = 0;
var increase = function () {
  currentNum++;
  updateUi();
};
function decrease() {
  currentNum--;
  updateUi();
} 
var updateUi = function updateUi() {
  totalClicks = totalClicks + 1;
  console.log("logging totalClicks", totalClicks);
  $("#currentNumber").text(String(currentNum));
  var color = "green";
  if (currentNum % 10 < 5 && currentNum % 10 > 0) {
    color = "white";
  }
  $("#stripe").css("background-color", color);
}
$(function () {
  $("#increase").on("click", increase);
  $("#decrease").on("click", decrease);
});
