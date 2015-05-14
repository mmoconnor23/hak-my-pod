'use strict';

angular.module('cakepopsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('form', {
        url: '/create/form',
        templateUrl: 'app/create/form/form.tpl.html',
        controller: 'FormCtrl'
      });
  });