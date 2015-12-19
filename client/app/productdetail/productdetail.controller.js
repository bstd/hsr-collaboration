'use strict';

angular.module('brewApp')
.controller('ProductDetailCtrl', ['$scope', '$state', '$mdDialog', '$log', '$filter', 'ProductService', 'BasketService', function($scope, $state, $mdDialog, $log, $filter, ProductService, BasketService) {
  $scope.product = [];
  $scope.id = $state.params.id;
  $scope.basketItems = [];
  $scope.basketItems = BasketService.items();

  // get detail
  $scope.product = ProductService.get({ id: $scope.id }, function(data) {
    $log.debug('queried:',data);

    //Related Products Beer taste
    $scope.related = ProductService.query(function(loadedProducts){
      //Get related Products with same Tastes
      $scope.related = $filter('filter')(loadedProducts, function(relation){
        return relation.vanity === data.vanity &&
            relation.name !== data.name;
      });
    });
    var isEmpty = $scope.related;
  });


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
