'use strict';

angular.module('houstyApp', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    controller:'HomeCtrl',
    templateUrl:'partials/home'
  })
  .when('/play', {
    controller:'PlayCtrl',
    templateUrl:'partials/play'
  })
  .otherwise({
    redirectTo:'/home'
  });
});