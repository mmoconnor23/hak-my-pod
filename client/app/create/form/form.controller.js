'use strict'; 

angular.module('cakepopsApp')
  .controller('FormCtrl', function ($scope) {
  	$scope.savedSuccessfully = false;
  	$scope.submit = function() {
  		if (!($scope.contact && $scope.fullname && $scope.idea && $scope.numCakePops)) {
  			alert('Enter something');
  		} else {
	  		localStorage.setItem(
		  		$scope.contact, $scope.fullname + $scope.idea + $scope.numCakePops
		  	);
		  	$scope.savedSuccessfully = true;
			$scope.idea = "";
		  	$scope.numCakePops = '';
		  	$scope.contact = '';
		  	$scope.fullname ='';
  		}
  	};
  });
