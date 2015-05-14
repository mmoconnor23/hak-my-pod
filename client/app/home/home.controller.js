'use strict';

angular.module('cakepopsApp')
  .controller('HomeCtrl', function () {
    var vm = this;

    vm.slides = [
      {
        title: 'Create a pop!',
        image: 'assets/images/home/design.jpg',
        link: 'design'
      },
      {
        title: 'Choose a pre-existing design!',
        image: 'assets/images/home/preexisting.jpg',
        link: 'existing'
      }
    ];
  });
