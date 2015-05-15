'use strict';

angular.module('cakepopsApp')
  .controller('AboutCtrl', function () {
    var vm = this;

    vm.hakMyPod = [
      {
        name: 'Melissa O\'Connor',
        image: 'assets/images/about/melissa.jpg'
      },
      {
        name: 'Yang Bai',
        image: 'assets/images/about/yang.jpg'
      },
      {
        name: 'Herry Lesmana',
        image: 'assets/images/about/herry.jpg'
      },
      {
        name: 'Aslesha Pansare',
        image: 'assets/images/about/aslesha.jpg'
      },
      {
        name: 'Kevin Ryan',
        image: 'assets/images/about/kevin.jpg'
      },
      {
        name: 'Peter Ruess',
        image: 'assets/images/about/peter.jpg'
      },
      {
        name: 'Kshitij Nagpal',
        image: 'assets/images/about/kshitij.jpg'
      }
    ];
  });
