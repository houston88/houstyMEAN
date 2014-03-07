/**
 * Created by hharris3 on 3/6/14.
 */
'use strict';

angular.module('houstyApp')
  // simple slider directive
  .directive('simpleSlider', function($timeout, $compile) {

      var slider;

      return {
        restrict: 'E',
        replace: true,
        require: '?ngModel',
        scope : {
          'start' : '@start',
          'end' : '@end'
        },
        link : function ($scope, $element, $attrs, ngModel) {

          // do nothing if we dont have model, start and end
          if(!ngModel || !$scope.start || !$scope.end) {
            return;
          }

          // init jquery plugin
          $timeout(function() {
            $element.noUiSlider({
              range: [parseInt($scope.start,10), parseInt($scope.end,10)],
              start: parseInt(ngModel.$modelValue,10),
              step: 1,
              handles: 1,
              slide: function() {
                // need some way to notify of change
                ngModel.$setViewValue(this.val());
                // we are outside angular, do an apply
                $scope.$apply();
              }
            });
          });

          // watch for changes
          $scope.$watch(function() {
            return ngModel.$modelValue;
          }, function(newValue, oldValue) {
            if (newValue !== oldValue) {
              $element.val(ngModel.$modelValue);
            }
          });

        }
      };
    });