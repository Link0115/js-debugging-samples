/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var App = App || {};
(function () {
  App.Counter = 0;
  function sayHello() {
    App.Messages.Add("Hello", 1);
    App.Messages.ClearLater(3, 3 * 1000);
  }
  function sayGoodbye() {
    App.Messages.Add("Goodbye", 2);
    App.Messages.ClearLater(3, 3 * 1000); 
  }
  function resetCount() {
    App.Counter = 0;
  }
  $("#hello").on("click", sayHello); 
  $("#goodbye").on("click", sayGoodbye);
  $("#resetCount").on("click", resetCount);
}());
