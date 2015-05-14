'use strict';

angular.module('cakepopsApp')
  .controller('DesignCtrl', function ($scope) {
  	$scope.myColor = '';
  	$scope.dynamicPopover = {
    templateUrl: 'app/create/design/myPopoverTemplate.html',
    title: 'Enter your Text!'
  };

  	$scope.btnPressed = function() {
  		console.log('hi');
  	}

  });
