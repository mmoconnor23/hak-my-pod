'use strict';

angular.module('cakepopsApp')
  .controller('DesignCtrl', function ($scope) {
  	$scope.myColor = 'hsl(0, 0%, 100%)';
    $scope.text = '';

    $scope.cakepop = {
      color: 'rgb(255, 0, 0)',
      sprinkles: {
        count: 1000,
        color: [ 'rgb(100, 100, 100)' ]
      }
    };

  	$scope.dynamicPopoverText = {
    templateUrl: 'app/create/design/PopoverTemplateText.html',
    title: 'Enter your Text!'
    };
    $scope.dynamicPopoverShapes = {
    templateUrl: 'app/create/design/PopoverTemplateShapes.html',
    };
    $scope.dynamicPopoverSprinklers = {
    templateUrl: 'app/create/design/PopoverTemplateSprinklers.html',
    };
  });
