'use strict';

angular.module('brewApp')
.directive('brewHeader', function() {
  return {
    templateUrl: 'components/header/header.html',
    restrict: 'C'
  };
});
