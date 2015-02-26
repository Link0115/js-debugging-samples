/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
(function () {
  var authTimedOut = false;
  var id = 0;

  setTimeout(function () {
    authTimedOut = true;
  }, 10 * 60 * 1000); //10 minutes

  $.ajax = function (config) {
    var dfd = $.Deferred();
    if (authTimedOut) {
      dfd.reject({status: 400}, "error", "forbidden");
    }
    dfd.resolve(id++);
    return dfd.promise();
  }
}());
