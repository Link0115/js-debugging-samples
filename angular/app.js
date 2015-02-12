(function () {
  angular
    .module('SampleApp', [])
    .factory('ColorService', ColorService)
    .controller('SampleController', ['$scope', 'ColorService', SampleController]); 

  function SampleController($scope, colorService) {
    $scope.currentNum = 1;
    $scope.values = [];
    $scope.syncWithNumber = function () {
      $scope.color = colorService.determine($scope.currentNum);
      $scope.values = [];
      for (var i = 1; i <= $scope.currentNum; ++i) {
        $scope.values.push({color: colorService.determine(i), id: i});
      }
    }
    $scope.syncWithNumber();
    $scope.increase = function () {
      $scope.currentNum++;
      $scope.syncWithNumber();
    }
    $scope.decrease = function () {
      $scope.currentNum--;
      $scope.syncWithNumber();
    }  
  }

  function ColorService() {
     function determine(currentNum) {
       var color = "green";
        if (currentNum % 10 <= 5 && currentNum % 10 > 0) {
          color = "white";
        }     
        return color;
     }
     return {
       determine: determine
     };
  }
}());
