'use strict';

angular.module('houstyApp')
.controller('PlayCtrl', function ($scope) {
  var dm, happydata;
  
  $scope.hello = 'Hello Play';

  // TODO: Call $http to node data api
  happydata = {'WA': {'score': 1, 'rank': 20, 'fillKey': 'MEDIUM'}, 'DE': {'score': -2, 'rank': 34, 'fillKey': 'LOW'}, 'DC': {'score': 6, 'rank': 12, 'fillKey': 'MEDIUM'}, 'WI': {'score': 0, 'rank': 23, 'fillKey': 'MEDIUM'}, 'HI': {'score': 1, 'rank': 21, 'fillKey': 'MEDIUM'}, 'FL': {'score': 11, 'rank': 5, 'fillKey': 'HIGH'}, 'AK': {'score': -4, 'rank': 40, 'fillKey': 'LOW'}, 'NH': {'score': 9, 'rank': 8, 'fillKey': 'HIGH'}, 'NJ': {'score': 7, 'rank': 10, 'fillKey': 'HIGH'}, 'NM': {'score': 0, 'rank': 24, 'fillKey': 'MEDIUM'}, 'TX': {'score': 18, 'rank': 3, 'fillKey': 'HIGH'}, 'LA': {'score': -5, 'rank': 42, 'fillKey': 'LOW'}, 'NC': {'score': 25, 'rank': 1, 'fillKey': 'TOP'}, 'ND': {'score': 0, 'rank': 25, 'fillKey': 'MEDIUM'}, 'NE': {'score': -4, 'rank': 39, 'fillKey': 'LOW'}, 'TN': {'score': -6, 'rank': 43, 'fillKey': 'LOW'}, 'NY': {'score': 4, 'rank': 13, 'fillKey': 'MEDIUM'}, 'PA': {'score': 24, 'rank': 2, 'fillKey': 'HIGH'}, 'RI': {'score': 3, 'rank': 17, 'fillKey': 'MEDIUM'}, 'NV': {'score': 0, 'rank': 26, 'fillKey': 'LOW'}, 'VA': {'score': 15, 'rank': 4, 'fillKey': 'HIGH'}, 'CO': {'score': 4, 'rank': 14, 'fillKey': 'MEDIUM'}, 'CA': {'score': 2, 'rank': 18, 'fillKey': 'MEDIUM'}, 'AL': {'score': -11, 'rank': 44, 'fillKey': 'LOW'}, 'VT': {'score': 0, 'rank': 27, 'fillKey': 'LOW'}, 'IL': {'score': -4, 'rank': 41, 'fillKey': 'LOW'}, 'GA': {'score': 8, 'rank': 9, 'fillKey': 'HIGH'}, 'IN': {'score': 7, 'rank': 11, 'fillKey': 'MEDIUM'}, 'IA': {'score': -2, 'rank': 35, 'fillKey': 'LOW'}, 'MA': {'score': -1, 'rank': 32, 'fillKey': 'LOW'}, 'AZ': {'score': 10, 'rank': 7, 'fillKey': 'HIGH'}, 'ID': {'score': 2, 'rank': 19, 'fillKey': 'MEDIUM'}, 'CT': {'score': 4, 'rank': 15, 'fillKey': 'MEDIUM'}, 'MD': {'score': 11, 'rank': 6, 'fillKey': 'HIGH'}, 'OK': {'score': 3, 'rank': 16, 'fillKey': 'MEDIUM'}, 'OH': {'score': -13, 'rank': 45, 'fillKey': 'LOW'}, 'MO': {'score': -2, 'rank': 36, 'fillKey': 'LOW'}, 'MN': {'score': 1, 'rank': 22, 'fillKey': 'MEDIUM'}, 'MI': {'score': 0, 'rank': 28, 'fillKey': 'LOW'}, 'KS': {'score': -3, 'rank': 38, 'fillKey': 'LOW'}, 'MS': {'score': 0, 'rank': 29, 'fillKey': 'LOW'}, 'PR': {'score': -1, 'rank': 33, 'fillKey': 'LOW'}, 'SC': {'score': 0, 'rank': 30, 'fillKey': 'LOW'}, 'KY': {'score': 0, 'rank': 31, 'fillKey': 'LOW'}, 'OR': {'score': -2, 'rank': 37, 'fillKey': 'LOW'}};
  
  // Lets try out datamaps
  // var map = 
  dm = angular.element('#usMap').datamaps({
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
    data: happydata,
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
    // can we add labels here?
    dmap.labels({fontSize: 10, labelColor: '#222'});
  });
  
});