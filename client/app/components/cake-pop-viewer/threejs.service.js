(function() {

  'use strict';

  // Provide THREE as threejs constant in AngularJS
  angular.module('cakepopsApp.components').factory('threejs', [
    function() {
      if (!THREE) {
        throw new Error('Three.js not loaded into environment. 3D components are now disabled.');
      }

      return THREE;
    }
  ]);

})();
