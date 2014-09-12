'use strict';

angular.module('angularjsPlaygroundApp')
  .controller('InfinitescrollCtrl', function($scope) {
    $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    $scope.loadMore = function() {
      var last = $scope.numbers[$scope.numbers.length - 1];
      for(var i = 1; i <= 18; i++) {
        $scope.numbers.push(last + i);
      }
    };
  });
