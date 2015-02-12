window.app = window.app || {};
(function () {
  app.SampleViewModel = function() {
    var self = this;
    self.currentNum = ko.observable(1);
    self.values = ko.observableArray([]);
    self.color = ko.observable();
    self.disableIncrease = ko.computed(function () {
      return self.currentNum() === 100;
    });
    self.disableDecrease = ko.computed(function () {
      return self.currentNum() === 1;
    });
    self.syncWithNumber();
  }
  app.SampleViewModel.prototype.syncWithNumber = function () {
    var self = this;
    self.color(app.ColorService.determine(self.currentNum()));
    var newArray = [];
    for (var i = 1; i <= self.currentNum(); ++i) {
      newArray.push({color: ko.observable(app.ColorService.determine(i))});
    }
    self.values(newArray);
  }
  app.SampleViewModel.prototype.increase = function () {
    var self = this;
    self.currentNum(self.currentNum()+1);
    self.syncWithNumber();
  }
  app.SampleViewModel.prototype.decrease = function () {
    var self = this;
    self.currentNum(self.currentNum()-1);
    self.syncWithNumber();
  }

  app.ColorService = {
    determine: function (currentNum) {
       var color = "green";
        if (currentNum % 10 <= 5 && currentNum % 10 > 0) {
          color = "white";
        }     
        return color;
     }
  };
  ko.applyBindings(new app.SampleViewModel(), document.getElementById("SampleViewModel"));
}());
