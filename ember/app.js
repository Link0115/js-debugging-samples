/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
(function () {
  window.SampleApp = Ember.Application.create();
  SampleApp.Router.map(function () {
    this.resource('base', { path: '/' });
  });
  SampleApp.BaseRoute = Ember.Route.extend({
    model: function () {
      return {currentNum: 1};
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      controller.setup();
    }
  });
  SampleApp.BaseController = Ember.ObjectController.extend({
    values: [true, false],
    disableIncrease: function () {
      return this.get('currentNum') === 100;
    }.property('currentNum'),
    disableDecrease: function () {
      return this.get('currentNum') === 1;
    }.property('currentNum'),
    color: '',
    setup: function () {
      this.syncWithNumber();
    },
    syncWithNumber: function () {
      var currentNum = this.get('model.currentNum');
      this.set('color', SampleApp.ColorService.determine(currentNum)); 
      var newArray = [];
      for (var i = 1; i <= currentNum; ++i) {
        newArray.push(SampleApp.ColorService.determine(i));
      }
      this.set('values', newArray);
    },
    actions: {
      increase: function () {
        this.set('model.currentNum', this.get('model.currentNum') + 1);
        this.syncWithNumber();
      },
      decrease: function () {
        this.set('model.currentNum', this.get('model.currentNum') - 1);
        this.syncWithNumber();
      },
    }
  });
  SampleApp.ColorService = {
    determine: function (currentNum) {
       var color = "green";
        if (currentNum % 10 <= 5 && currentNum % 10 > 0) {
          color = "white";
        }     
        return color;
     }
  };
}());
