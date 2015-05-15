'use strict';

angular.module('cakepopsApp')
  .controller('AppCtrl', function ( $window ) {
    var vm = this;

    vm.openLink = function( siteString ) {
      if ( siteString === 'facebook' ){
      	$window.open('https://www.facebook.com/sweetbitesbyval');
      } else {
      	$window.open('https://www.weebly.com');
      }
    };
  });
