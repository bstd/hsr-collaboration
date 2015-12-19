'use strict';

angular.module('brewApp')
.controller('BasketCtrl', ['$scope', '$state', 'BasketService', 'ProductService', 'ToastSimpleService', function($scope, $state, BasketService, ProductService, ToastSimpleService) {
  $scope.basketTotal = 0;
  $scope.basketItems = [];
  $scope.basketItems = BasketService.items();

  // track empty basket
  $scope.empty = BasketService.isEmpty($scope.basketItems.length);

  // calculate basket total via service
  $scope.basketTotal = BasketService.total();


  // remove from basket via service, show toast
  $scope.removeItem = function(basketItem) {
    BasketService.removeItem(basketItem);

    $scope.basketTotal = BasketService.total();
    ToastSimpleService('Warenkorb aktualisiert', 'success');

    $scope.empty = BasketService.isEmpty($scope.basketItems.length);
  };

  // continue to checkout
  $scope.checkout = function() {
    $state.go('checkout');
  };
}]);
