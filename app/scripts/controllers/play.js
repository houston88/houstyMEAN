'use strict';

angular.module('houstyApp')
.controller('PlayCtrl', function ($scope, $http) {
  var dm;
  
  $scope.hello = 'Hello Play';
  $scope.slider = {index:0,count:0};
  
  // Used by buttons
  $scope.isActive = function(id) {
    return id === $scope.selectedId;
  };
  
  // Watch for value change, update map
  $scope.$watch('slider.index', function(newValue, oldValue) {
    // Ug, have to parse
    var newIntVal = parseInt(newValue,10);
    var oldIntVal = parseInt(oldValue,10);
    if (oldIntVal !== newIntVal) {
      $scope.updateMap($scope.happiestStates[newIntVal]);
    }
  });
  
  $scope.updateMap = function(happiestState) {
    // update selected
    $scope.selectedId = happiestState._id;
    $scope.selectedDate = happiestState.parseDate;
    // Get full data
    $http.get('/api/happiestStates/'+happiestState._id).success(function(data) {
      if (dm) {
        // Update
        dm.updateChoropleth(data[0]);
      } else {
        // first time
        loadMap(data[0]);
      }
    });
  };

  // Initial load data
  $http.get('/api/happiestStates').success(function(data) {
    if (data.length>0) {
      $scope.happiestStates = data;
      $scope.slider.index = 0;
      $scope.slider.count = data.length-1;
      $scope.updateMap(data[0]);
    }
  });

  function loadMap(mapData) {
    // Lets try out datamaps
    angular.element('#usMap').datamaps({
      scope: 'usa',
      fills: {
        TOP: '#99FF99',
        HIGH: '#3385FF',
        MEDIUM: '#66A3FF',
        LOW: '#99C2FF',
        NEG: '#CC3300',
        UNKNOWN: '#D0D0D0',
        defaultFill: '#D0D0D0'
      },
      data: mapData,
      geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function(geography, data) {
          if (!data) {
            data = {rank:'NA',score:'NA'};
          }
          return '<div class="hoverinfo"><b>'+geography.properties.name+
          '<b><br>Rank: '+data.rank+'<br>Score: '+data.score;
        }
      }
    }, function(dmap) {
      // so we can update data later
      dm = dmap;
      // can we add labels here?
      dmap.labels({fontSize: 10, labelColor: '#222'});
      //dmap.legend();
    });
  }
  
  
});