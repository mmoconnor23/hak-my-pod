(function() {

  'use strict';

  var module = angular.module('cakepopsApp.components'),
      cakePopViewerController;

  cakePopViewerController = function($q) {
    var deferredScene = $q.defer(),
        deferredPop = $q.defer();

    /*
     * Get ThreeJs Viewer Scene
     * @function
     * @returns {Promise(object)} - ThreeJs Scene in Viewer
     */
    this.getScene = function() {
      return deferredScene.promise;
    };

    /*
     * Get ThreeJs CakePop Instance
     * @function
     * @returns {Promise(object)} - ThreeJs Cake Pop Instance
     */
    this.getPop = function() {
      return deferredPop.promise;
    };

    /*
     * Set Active CakePopViewer Scene
     * @function
     * @param {object} scene - Cake Pop Viewer Scene
     */
    this.setScene = function(scene) {
      deferredScene.resolve(scene);
    };

    /*
     * Set Active CakePop Instance
     * @function
     * @param {object} pop - Active Cake Pop Instance
     */
    this.setPop = function(pop) {
      deferredPop.resolve(pop);
    };

    /*
     * Set Whether Viewer is Loading
     * @function
     * @param {bool} isLoading - Set Whether Viewer is Loading
     */
    this.setLoading = function(isLoading) {
      this.isLoading = isLoading;
    };
  };

  module.controller('cakePopViewerController', [
    '$q',
    cakePopViewerController
  ]);

})();
