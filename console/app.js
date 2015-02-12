/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
(function () {
  "use strict";
  window.stopDebuggerOnLog = true;
  function logit() {
    if (stopDebuggerOnLog) {
      debugger;
    }
  }
  $(function () {
    $("#throwBtn").on("click", function throwException () {
      window.missing_api.doit();
    });
    $("#doNotThrowBtn").on("click", function doNotThrow() {
      try {
        window.i_know_this_is_api.doit();
      } catch (e) {
        logit();
      }    
    }); 
    $("#debuggerBtn").on("click", function () {
      stopDebuggerOnLog = !stopDebuggerOnLog;
    });
  });
}());
