'use strict';

angular.module('brewApp')
.controller('ResultCtrl', ['$scope', '$state', 'ProductService', function($scope, $state, ProductService) {
//console.log('params:',$state.params);
  $scope.results = [];
  $scope.query = $state.params.query;
//console.log('$scope.query:',$scope.query);
  $scope.results = ProductService.query($scope.query);
}]);
