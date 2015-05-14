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
          var renderer = getRenderer(),
              scene = prepareScene(),
              camera = addCamera(scene),
              viewPortContainer = getViewportContainer();

          if (!viewPortContainer) {
            throw new Error("CakePopViewer: Could not find viewport container. Cannot begin rendering.");
          }

          viewPortContainer.appendChild(renderer.domElement);

          var render = function() {
            requestAnimationFrame( render );

            renderer.render( scene, camera );
          };

          render();
        }

        /*
         * Get Initialized Three.js Renderer
         * @function
         * @returns {object}} - Three.js renderer
         */
        function getRenderer() {
          var renderer = new threejs.WebGLRenderer({ antialias: true });

          renderer.setSize( window.innerWidth, window.innerHeight );
          renderer.setClearColor(0xffffff, 1);
          renderer.shadowMapEnabled = true;
          renderer.shadowMapSoft = true;
          renderer.shadowMapType = threejs.PCFSoftShadowMap;
          renderer.physicallyBasedShading = true;

          return renderer;
        }

        /*
         * Create New Scene
         * @function
         * @returns {object} - New Three.js Scene
         */
        function prepareScene() {
          var scene = new threejs.Scene;

          // Set up Environment
          addLighting(scene);
          addFloor(scene);
          addPop(scene);

          return scene;
        }

        /*
         * Add Lighting to Scene
         * @function
         * @param {object} scene - Three.js scene to add lighting to
         */
        function addLighting(scene) {
          // Initialize Light
          var light = new threejs.DirectionalLight( 0xFFFFFF );
          light.position.set( 30, 80, 30 );
          light.target.position.copy( scene.position );
          light.castShadow = true;

          // Add Light to Scene
          scene.add( light );

        }

        /*
         * Add Camera to Scene
         * @function
         * @param {object} scene - Scene to add camera to
         * @returns {object} - Camera that was added to scene
         */
        function addCamera(scene) {
          var camera = new threejs.PerspectiveCamera(
            65, window.innerWidth / window.innerHeight, 1, 1000
          );
          camera.position.set( 50, 60, 0 );
          camera.lookAt({
            x: scene.position.x,
            y: scene.position.y + 20,
            z: scene.position.z
          });

          scene.add( camera );

          return camera;
        }

        /*
         * Draw CakePop in Scene
         * @function
         * @param {object} scene - Three.js scene to draw cake pop in
         * @returns {object} - Pop Object Added to Scene
         */
        function addPop(scene) {
          var universalGeometry = new threejs.Geometry(),
            pop = new threejs.Mesh(
            new threejs.SphereGeometry( 5, 32, 32 ),
            new threejs.MeshLambertMaterial({
              color: 0x00ff00
            })),
            stick = new threejs.Mesh(
              new threejs.CylinderGeometry( 0.5, 0.5, 20, 32, 32 ),
              new threejs.MeshLambertMaterial({
                color: 0xFFFFFF
              })
            ),
            cakePop;

          pop.position.set( 0, 35, 0 );
          pop.castShadow = true;
          pop.receiveShadow = false;
          stick.position.set( 0, 20, 0);
          stick.castShadow = true;
          stick.receiveShadow = false;

          scene.add( pop );
          scene.add( stick );

          return pop;
        }

        /*
         * Create Floor Plane in Scene
         * @function
         * @param {object} scene - Scene to add floor plane to
         * @return {object} - Floor Plane object added to scene
         */
        function addFloor(scene) {
          var ground = new threejs.Mesh(
            new threejs.BoxGeometry(50, 1, 60),
            new threejs.MeshLambertMaterial({
              color: 0xffffff
            }));
          ground.position.set( 0, 5, 0 );
          ground.receiveShadow = true;

          scene.add( ground );
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
