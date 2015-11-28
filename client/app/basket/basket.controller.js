'use strict';

angular.module('brewApp')
.controller('BasketCtrl', ['$scope', 'BasketService', 'ProductService', function($scope, BasketService, ProductService) {
  $scope.basketItems = [];
  $scope.basketItems = BasketService.items();
//console.log('$scope.basketItems:',$scope.basketItems);

  $scope.empty = $scope.basketItems.length === 0;
//console.log('$scope.empty:',$scope.empty);

  $scope.checkout = function() {
//console.log('checkout');
    $state.go('checkout');
  };
}]);
