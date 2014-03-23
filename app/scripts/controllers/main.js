'use strict';

angular.module('houstyApp')
.controller('MainCtrl', function ($scope) {
  $scope.hello = 'Hello';

  // Nothing here yet - This would be a good place for global at root of scope
  //$http.get('/api/awesomeThings').success(function(awesomeThings) {
  //  $scope.awesomeThings = awesomeThings;
  //});
  
  // Common utility methods
  $scope.scrollTop = function() {
    angular.element('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  };

  // Lets try out a parallax bg
  angular.element('#parallax-bg').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: 10,
    scalarX: 2,
    scalarY: 8,
    frictionX: 0.2,
    frictionY: 0.8
  });

});
