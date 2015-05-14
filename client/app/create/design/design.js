'use strict';

angular.module('cakepopsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('design', {
        url: '/create/design',
        templateUrl: 'app/create/design/design.tpl.html',
        controller: 'DesignCtrl'
      });
  });