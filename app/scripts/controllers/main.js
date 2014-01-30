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
  
});
