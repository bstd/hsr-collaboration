'use strict';

angular.module('brewApp')
.controller('ResultCtrl', ['$scope', '$state', '$mdDialog', '$log', 'ProductSearchService', 'BasketService', 'STATES', 'VANITIES', function($scope, $state, $mdDialog, $log, ProductSearchService, BasketService, STATES, VANITIES) {
  $scope.results = [];
  $scope.empty = true;
  $scope.query = $state.params.query;
  $log.debug('$scope.query:',$scope.query);

  $scope.results = ProductSearchService.search({ 'query': $scope.query }, function() {
    $scope.empty = $scope.results.length === 0;
    $log.debug('$scope.empty:',$scope.empty);
  });

  //categories
  $scope.vanities = VANITIES;
  $scope.states = STATES;


  // add product to basket:
  $scope.addToBasket = function(product) {
    BasketService.addItem(product._id, product.ean, product.name, product.price, 1);

    $mdDialog.show({
      controller: DialogCtrl,
      templateUrl: 'app/basket/basket-dialog.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      locals: {
        item: product
      }
    })
    .then(function(answer) {
      if (typeof answer !== 'undefined') {
        if (answer === 'checkout') {
          $state.go('checkout');
        }
        if (answer === 'basket') {
          $state.go('basket');
        }
      }
    }, function() {
      $log.debug('You cancelled the dialog');
    });

    function DialogCtrl($scope, item, $mdDialog) {
      $scope.item = product;

      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.close = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
  };
}]);
