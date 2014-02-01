'use strict';

angular.module('houstyApp')
.controller('HomeCtrl', function ($scope) {
  $scope.hello = 'Hello Home';
  
  // Cant use #hrefs with angular routing on
  // Use JavaScript controls for carousel
  $scope.prevSlide = function() {
    angular.element('.carousel').carousel('prev');
  };
  $scope.nextSlide = function() {
    angular.element('.carousel').carousel('next');
  };
  
});
  