/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var App = App || {};
(function() {
  App.Messages = {};
  App.Messages.ClearLater = function (type, clearDelay) {
      setTimeout($.proxy(App.Messages.ClearType, null, type), clearDelay);
  }
  function getClass(type) {
    if (type === 1) { return "hello"; }
    if (type === 10) { return "goodbye"; }
    return "";
  }
  App.Messages.Add = function (text, type) {
    var $msg = $("<div class='msg " + getClass(type) + "'>");
    $msg.text(text);
    $("#msgContainer").append($msg);
  }
  App.Messages.ClearType = function (type) {
     var selector = ".msg";
     var cls = getClass(type);
     if (cls) {
       selector += "." + cls;
     }
     $(selector).remove();
  }
}());
