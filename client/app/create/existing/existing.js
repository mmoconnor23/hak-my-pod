'use strict';

angular.module('cakepopsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('existing', {
        url: '/create/existing',
        templateUrl: 'app/create/existing/existing.tpl.html',
        controller: 'ExistingCtrl'
      });
  });