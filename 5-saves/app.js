/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
app.AddModel = function (ui) {
  var self = this;
  self.ui = ui;
  self.ui.onAdd = function (formData) { self.onAdd(formData); }
  self.ui.onClear = function () { self.onClear(); }
  return self;
};
app.AddModel.prototype.onAdd = function (formData) {
  var self = this;
  self.createOnServer(formData).done(function (status) {
    if (status === "created") {
      self.ui.clear();
      toastr.info("Team Added");
    } else if (status === "auth-timed-out") {
      toastr.error("You have been logged out. You must reload page and re-login to application");
    } else {
      toastr.error("Unable to add team");
    }
  });
}
app.AddModel.prototype.createOnServer = function (formData, failWith) {
  var self = this;
  var dfd = $.Deferred();
  if (failWith) {
    dfd.resolve(failWith);
  } else {
    $.ajax({url: '/nfl/teams', type: 'PUT', data: formData}).done(function () {
      dfd.resolve('created');
    }).fail(function (jqXHR, textStatus, errorThrown) {
      if (jqXHR.status === 400) {
        dfd.resolve('auth-timed-out');
      } else {
        dfd.resolve('failed');
      }
    });
  }
  return dfd;
}
app.AddModel.prototype.onClear = function () {
  var self = this;
  self.ui.clear();
}
$(function () {
  app.ui.bind();
  app.Add = new app.AddModel(app.ui);
});
