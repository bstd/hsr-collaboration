'use strict';

angular.module('brewApp')
.controller('MainCtrl', ['$scope', '$http', 'ProductService', function($scope, $http, ProductService) {
  $scope.products = [];

  $scope.products = ProductService.query();
}]);
