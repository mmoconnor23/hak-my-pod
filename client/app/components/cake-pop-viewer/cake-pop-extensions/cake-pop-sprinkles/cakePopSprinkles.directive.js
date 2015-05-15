(function() {
  var module = angular.module('cakepopsApp.components'),
      cakePopSprinkles;

  cakePopSprinkles = function(threejs, $parse) {
    return {
      restrict: 'A',
      require: '?^cakePopViewer',
      link: function(scope, elem, attr, cakePopCtrl) {

        var sprinkleTypeAttrName = 'sprinkleType',
            sprinkleCountAttrName = 'sprinkleCount',
            sprinkleColorAttrName = 'sprinkleColor',
            sprinklesDefaultColor = 0xffffff,
            activeSprinkles,
            view = {
              type: undefined,
              color: undefined,
              count: undefined
            };

        if (!cakePopCtrl) {
          throw new Error('CakePopSprinkles: CakePopViewerCtrl not found in DOM. Sprinkles Inoperable.')
        }

        /*
         * Redraw Sprinkles on Cake Pop
         * @function
         */
        function redrawSprinkles() {
          var sprinklesType = getSprinkleTypeAttr(),
              sprinklesCount = getSprinkleCountAttr(),
              sprinklesColor = getSprinkleColorAttr() || sprinklesDefaultColor,
              scene;

          if (!getSprinkleCountAttr()) {
            clearSprinkles();
            return;
          }

          if (view.type === getSprinkleTypeAttr() &&
              view.color === getSprinkleColorAttr() || sprinklesDefaultColor &&
              view.count === getSprinkleCountAttr()) {
            return;
          }

          view.color = getSprinkleColorAttr() || sprinklesDefaultColor;
          view.type = getSprinkleTypeAttr();
          view.count = getSprinkleCountAttr();

          cakePopCtrl.getScene().then(function(tmpScene) {
            scene = tmpScene;
            return cakePopCtrl.getPop();
          }).then(function(pop) {
            addSprinkles(view.type, sprinklesCount, sprinklesColor, pop, scene);
          });
        }

        /*
         * Add count Sprinkles to Pop
         * @function
         * @param {string} type - Name of shape type to add
         * @param {int} count - Number of Sprinkles to add to Pop
         * @param {array[string]} colors - Array of Sprinkle Colors to Randomly Select
         * @param {object} pop - Pop to add sprinkles around
         * @param {object} scene - Three.js scene to add sprinkles to
         * @returns {array[object]} - Array of sprinkles added to cake pop
         */
        function addSprinkles(type, count, colors, pop, scene) {
          var tmpCoordinates,
              colorRangeSize = count / colors.length,
              colorIndex,
              tmpMaterial;

          for (var i = 0; i < count; ++i) {
            colorIndex = Math.floor(i / colorRangeSize);
            tmpMaterial = new threejs.MeshBasicMaterial({ color: colors[colorIndex] });
            tmpCoordinates = getRandomSphereCoordinate(pop.position.x,
                                                       pop.position.y,
                                                       pop.position.z,
                                                       pop.geometry.boundingSphere.radius);

            addShape(type, tmpCoordinates.x, tmpCoordinates.y, tmpCoordinates.z, tmpMaterial, scene);
          }
        }

        /*
         * Add Shape to Scene
         * @function
         * @param {string} type - Type of shape to add
         * @param {int} x - X coordinate of new shape
         * @param {int} y - Y coordinate of new shape
         * @param {int} z - Z coordinate of new shape
         * @param {object} material - Material to add to geometry before adding
         * @param {object} scene - Three.js scene to add shape to
         */
        function addShape(type, x, y, z, material, scene) {
          var geometry = new threejs.SphereGeometry(0.15, 10, 10);

          mesh = new threejs.Mesh( geometry, material );

          mesh.position.x = x;
          mesh.position.y = y;
          mesh.position.z = z;

          scene.add( mesh );
        }

        /*
         * Get Random Coordinate on Sphere Surface
         * @function
         * @param {float} x - x Coordinate of Sphere
         * @param {float} y - y Coordinate of Sphere
         * @param {float} z - z Coordinate of Sphere
         * @param {float} radius - Radius of Sphere
         * @returns {object} - Object with x, y, and z properties, representing a random coordinate on sphere surface
         */
        function getRandomSphereCoordinate(x0, y0, z0, radius) {
          var u = Math.random();
          var v = Math.random();
          var theta = 2 * Math.PI * u;
          var phi = Math.acos(2 * v - 1);
          return {
            x: x0 + (radius * Math.sin(phi) * Math.cos(theta)),
            y: y0 + (radius * Math.sin(phi) * Math.sin(theta)),
            z: z0 + (radius * Math.cos(phi))
          };
        }

        /*
         * Remove All Sprinkles From Scene
         * @function
         */
        function clearSprinkles() {
          if (activeSprinkles) {
            cakePopCtrl.getScene().then(function(scene) {
              activeSprinkles.forEach(function(sprinkle) {
                scene.remove( sprinkle );
              });
            });
          }
        }

        /*
         * Get Sprinkle Type Attribute
         * @function
         * @returns {object} - Value of SprinkleTypeAttr. Undefined if not found.
         */
        function getSprinkleTypeAttr() {
          var parseAttr = $parse(attr[sprinkleTypeAttrName]);
          return (angular.isFunction(parseAttr)) ? parseAttr(scope) : undefined;
        }

        /*
         * Get Sprinkle Color Attribute
         * @function
         * @returns {object} - Value of SprinkleColorAttr. Undefined if not found.
         */
        function getSprinkleCountAttr() {
          var parseAttr = $parse(attr[sprinkleCountAttrName]);
          return (angular.isFunction(parseAttr)) ? parseAttr(scope) : undefined;
        }

        /*
         * Get Sprinkle Color Attribute
         * @function
         * @returns {object} - Value of SprinkleColorAttr. Undefined if not found.
         */
        function getSprinkleColorAttr() {
          var parseAttr = $parse(attr[sprinkleColorAttrName]);
          return (angular.isFunction(parseAttr)) ? parseAttr(scope) : undefined;
        }

        scope.$watch(function() {
          return getSprinkleTypeAttr();
        }, redrawSprinkles);

        scope.$watch(function() {
          return getSprinkleCountAttr();
        }, redrawSprinkles);

        scope.$watch(function() {
          return getSprinkleColorAttr();
        }, redrawSprinkles);

      }
    };
  };

  module.directive('cakePopSprinkles', [
    'threejs',
    '$parse',
    cakePopSprinkles
  ]);

})();
