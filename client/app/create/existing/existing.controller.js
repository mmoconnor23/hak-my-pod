'use strict'; 

angular.module('cakepopsApp')
  .controller('ExistingCtrl', function ($scope, $http) {

   var imageList = ['batman.jpg', 'bow.jpg', 'choc_chip.jpg', 'crystal.jpg', 'cupcake.jpg', 'effiel_tower.jpg', 'fifty.jpg', 
      'flower.jpg', 'football.jpg', 'fox.jpg', 'ghosts.jpg', 'girls.jpg', 'halloween.jpg', 'kiss.jpg', 'love.jpg', 
      'love_2.jpg', 'micky.jpg', 'mouse.jpg', 'mouse_2.jpg', 'pig.jpg', 'rose.jpg', 'silly_mouse.jpg', 'snowflake.jpg', 
      'snowman.jpg', 'top.jpg'];

   $scope.imageList = _.map(imageList, function(imageUrl) {
    return 'assets/images/cakepop_images/' + imageUrl;
   });

  });
