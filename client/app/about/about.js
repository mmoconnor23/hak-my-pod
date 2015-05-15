'use strict';

angular.module('cakepopsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.tpl.html',
        controller: 'AboutCtrl'
      });
  });
