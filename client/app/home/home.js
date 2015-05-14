'use strict';

angular.module('cakepopsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.tpl.html',
        controller: 'HomeCtrl'
      });
  });