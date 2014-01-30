'use strict';

angular.module('houstyApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '#/home',
      'path': '/home'
    },
    {
      'title': 'Play',
      'link': '#/play',
      'path': '/play'
    }];
    
    $scope.isActive = function(route) {
      return $location.path().indexOf(route) === 0;
    };
    
    // Close collapsed menu on click
    $scope.collapseMenu = function() {
      if (angular.element('.navbar-collapse').hasClass('in')) {
        angular.element('.navbar-collapse').collapse('hide');
      }
    };
    
  });
