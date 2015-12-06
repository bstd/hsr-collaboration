'use strict';

angular.module('brewApp')
.controller('BasketCtrl', ['$scope', '$state', 'BasketService', 'ProductService', 'ToastSimpleService', function($scope, $state, BasketService, ProductService, ToastSimpleService) {
  $scope.basketTotal = 0;
  $scope.basketItems = [];
  $scope.basketItems = BasketService.items();
console.log('BasketCtrl basketItems:',$scope.basketItems);
  // track empty basket
  $scope.empty = BasketService.isEmpty($scope.basketItems.length);
console.log('BasketCtrl $scope.empty:',$scope.empty);

  // calculate basket total via service
  $scope.basketTotal = BasketService.total();
console.log('BasketCtrl basketTotal:',$scope.basketTotal);


  // remove from basket via service, show toast
  $scope.removeItem = function(basketItem) {
    BasketService.removeItem(basketItem);

    $scope.basketTotal = BasketService.total();
    ToastSimpleService('Warenkorb aktualisiert', 'success');
//console.log($scope.basketTotal);
//console.log($scope.basketItems.length);
    $scope.empty = BasketService.isEmpty($scope.basketItems.length);
  };

  // continue to checkout
  $scope.checkout = function() {
    $state.go('checkout');
  };
}]);
