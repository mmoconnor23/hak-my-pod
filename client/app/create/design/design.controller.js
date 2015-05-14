'use strict';

angular.module('cakepopsApp')
  .controller('DesignCtrl', function ($scope) {
  	$scope.myColor = '';
  	$scope.dynamicPopoverText = {
    templateUrl: 'app/create/design/myPopoverTemplate.html',
    title: 'Enter your Text!'
  };

  });
