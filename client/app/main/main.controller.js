'use strict';

angular.module('cakepopsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $scope.sprinkles = {
      color: [ 'rgb(255, 255, 255)', 'rgb(80, 80, 80)', 'rgb(0, 0, 0)' ],
      count: 1000,
      type: 'pill'
    };

    $scope.color = 'rgb(255, 0, 0)';

    $scope.setGreen = function() {
      $scope.color = 'rgb(0, 255, 0)';
    };

    $scope.setBlue = function() {
      $scope.color = 'rgb(0, 0, 255)';
    };

    $scope.setRed = function() {
      $scope.color = 'rgb(255, 0, 0)';
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
