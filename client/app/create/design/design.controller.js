'use strict';

angular.module('cakepopsApp')
  .controller('DesignCtrl', function ($scope) {
  	$scope.myColor = 'hsl(0, 0%, 100%)';
    $scope.text = '';
  	$scope.dynamicPopoverText = {
    templateUrl: 'app/create/design/PopoverTemplateText.html',
    title: 'Enter your Text!'
    };
    $scope.dynamicPopoverShapes = {
    templateUrl: 'app/create/design/PopoverTemplateShapes.html',
    title: 'Choose a Shape!'
    };
    $scope.dynamicPopoverSprinkles = {
    templateUrl: 'app/create/design/PopoverTemplateSprinkles.html', 
    title: 'Choose a color!'  
    };
  });
