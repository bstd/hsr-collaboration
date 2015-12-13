'use strict';

angular.module('brewApp')
.controller('MainCtrl', ['$scope', '$state', '$mdDialog', 'ProductService', 'BasketService', function($scope, $state, $mdDialog, ProductService, BasketService) {
  $scope.products = [];
  $scope.basketItems = [];
  $scope.basketItems = BasketService.items();
//console.log('ProductCtrl basketItems:',$scope.basketItems);

  // get all products from ProductService
  $scope.products = ProductService.query();

    //Price convert string to number
    angular.forEach($scope.products, function (product) {
      product.price = parseFloat(product.price);
    });

  // add product to basket:
  //  1) call BasketService
  //  2) show md-dialog with
  //      - added item information
  //      - choice to go to basket or checkout
  $scope.addToBasket = function(product) {
//console.log('addToBasket:',product);
    BasketService.addItem(product._id, product.ean, product.name, product.price, 1);

    $mdDialog.show({
      controller: DialogCtrl,
      templateUrl: 'app/basket/basket-dialog.html',
      parent: angular.element(document.body),
      //targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        item: product
      }
    })
    .then(function(answer) {
//console.log('then:',answer);
      if (typeof answer !== 'undefined') {
        if (answer === 'checkout') {
          $state.go('checkout');
        }
        if (answer === 'basket') {
          $state.go('basket');
        }
      }
    }, function() {
//console.log('You cancelled the dialog');
    });

    function DialogCtrl($scope, item, $mdDialog) {
      $scope.item = product;
//console.log('DialogCtrl:',item);
//console.log('$scope.item:',$scope.item);

      $scope.hide = function() {
//console.log('DialogCtrl hide');
        $mdDialog.hide();
      };
      $scope.close = function() {
//console.log('DialogCtrl close');
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
//console.log('DialogCtrl answer');
        $mdDialog.hide(answer);
      };
    }
  };



  $scope.vanities = [ '', 'Lagerbier', 'Spezialbier', 'Dunkles Bier', 'Naturtrübes Bier', 'Alkoholfreies Bier', 'Altbier',
      'Pale Ale', 'Festbier (Bockbier)', 'Porter', 'Schwarzbier', 'Stout', 'Kohlenhydratarmes Bier', 'Leichtbier (alkoholarm)',
      'Mais-, Reisbier', 'Mehrkornbier', 'Starkbier', 'Holzfassgereifte Biere', 'Weizenbier (Weissbier)', 'Biermischgetränke' ];

  $scope.states = [ '', 'Schweiz', 'Deutschland', 'Tschechien', 'Britannien', 'Irland', 'Belgien', 'Holland', 'Dänemark', 'USA', 'Kanada', 'Mexico' ];

}]);
