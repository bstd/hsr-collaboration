'use strict';

angular.module('brewApp')
.controller('MainCtrl', ['$scope', '$http', 'ProductService', function ($scope, $http, ProductService) {
  $scope.products = [];

  ProductService.query().$promise.then(function(data) {
    $scope.products = data;
  });
}]);
