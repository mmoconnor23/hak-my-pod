'use strict';

angular.module('cakepopsApp')
  .controller('AppCtrl', function ( $window ) {
    var vm = this;

    vm.openLink = function( siteString ) {
      siteString === 'facebook' ?
        $window.open('https://www.facebook.com/sweetbitesbyval') : $window.open('https://www.weebly.com');
    }
  });
