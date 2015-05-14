(function() {

  'use strict';

  var module = angular.module('cakepopsApp.components'),
      cakePopViewer;

  cakePopViewer = function(threejs) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/cake-pop-viewer/cakePopViewer.tpl.html',
      controller: 'cakePopViewerController',
      controllerAs: 'cakePopViewCtrl',
      link: function(scope, elem) {

        var threejsViewportContainerId = '#threejs-viewport-container';

        /*
         * Get ViewPort Container DOM Element
         *
         *    Returns the DOM element to which the Threejs viewer should be added.
         *    Returns undefined if no element with the requested ID is found.
         *
         * @function
         */
        function getViewportContainer() {
          var viewPortList = elem.find( threejsViewportContainerId );
          return ( viewPortList.length > 0 ) ? viewPortList[0] : undefined;
        }

        /*
         * Initialize Three.js Viewport for Cake Pop Viewer
         */
        function init() {
          var scene = new threejs.Scene(),
              camera = new threejs.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000),
              renderer = new threejs.WebGLRenderer(),
              viewportContainer = getViewportContainer(),
              pop;

          if (!viewportContainer) {
            throw new Error('CakePopViewer: Could not find viewport container. 3D rendering is disabled.');
          }

          renderer.setSize( window.innerWidth, window.innerHeight );

          viewportContainer.appendChild( renderer.domElement );
          pop = drawPop(scene);
          camera.position.z = 5;

          var render = function() {
            requestAnimationFrame( render );

            pop.rotation.x += 0.1;
            pop.rotation.y += 0.1;

            renderer.render( scene, camera );
          };

          render();
        }

        /*
         * Draw CakePop in Scene
         * @function
         * @param {object} scene - Three.js scene to draw cake pop in
         * @returns {object} - Pop Object Added to Scene
         */
        function drawPop(scene) {
          var geometry = new threejs.BoxGeometry( 1, 1, 1),
              material = new threejs.MeshBasicMaterial( { color: 0x00ff00 }),
              cube = new threejs.Mesh( geometry, material );

          scene.add( cube );

          return cube;
        }

        init();
      }
    };
  };

  module.directive('cakePopViewer', [
    'threejs',
    cakePopViewer
  ])

})();
