'use strict';

angular.module('brewApp')
.directive('beerHeader', function() {
  return {
    templateUrl: 'components/header/header.html',
    restrict: 'E'
  };
});
