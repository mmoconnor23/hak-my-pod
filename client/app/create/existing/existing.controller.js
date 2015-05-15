'use strict'; 

angular.module('cakepopsApp')
  .controller('ExistingCtrl', function ($scope) {

	var imageList = ['batman', 'bow', 'choc_chip', 'crystal', 'cupcake', 'eiffeltower', 'fifty', 
	'flower', 'football', 'fox', 'ghosts', 'girls', 'halloween', 'kiss', 'love', 
	'love_2', 'micky', 'mouse', 'mouse_2', 'pig', 'rose', 'silly_mouse', 'snowflake', 
	'snowman', 'top'];

  	var imageUrls = _.map(imageList, function(imageUrl) {
		return 'assets/images/cakepop_images/' + imageUrl + '.jpg';
   	});

  	$scope.imageList = _.map(_.zip(imageUrls, imageList), function(image) {
		return {
			imageUrl: image[0],
			imageName: image[1]
		};
  	});

  	console.log($scope.imageList);

   // 	$scope.imageList = _.zip(_.object(imageName: imageList), _.object(imageUrl: imageUrls));

 //  	$scope.imageList = imageList

	// $scope.imageList.imageNames = ['batman', 'bow', 'choc_chip', 'crystal', 'cupcake', 'effiel_tower', 'fifty', 
 //      'flower', 'football', 'fox', 'ghosts', 'girls', 'halloween', 'kiss', 'love', 
 //      'love_2', 'micky', 'mouse', 'mouse_2', 'pig', 'rose', 'silly_mouse', 'snowflake', 
 //      'snowman', 'top'];



   // $scope.imageList = _.map(imageList, function(imageUrl) {
   //  return 'assets/images/cakepop_images/' + imageUrl + '.jpg';
   // });

   // $scope.fileNames = imageList;

  });
