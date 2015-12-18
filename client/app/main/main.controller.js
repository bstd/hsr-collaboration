'use strict';

angular.module('brewApp')
	.controller('MainCtrl', ['$scope', '$state', '$log', '$mdDialog', 'ProductService', 'BasketService', 'STATES', 'VANITIES', function ($scope, $state, $log, $mdDialog, ProductService, BasketService, STATES, VANITIES) {
		$scope.products = [];
		$scope.basketItems = [];
		$scope.basketItems = BasketService.items();

		//categories
		$scope.vanities = VANITIES;
		$scope.states = STATES;

		// get all products from ProductService
		$scope.products = ProductService.query(function () {
			angular.forEach($scope.products, function (product) {
				//Price convert string to number
				product.price = parseFloat(product.price);
			});
		});


		// add product to basket:
		$scope.addToBasket = function (product) {
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
				.then(function (answer) {
					if (typeof answer !== 'undefined') {
						if (answer === 'checkout') {
							$state.go('checkout');
						}
						if (answer === 'basket') {
							$state.go('basket');
						}
					}
				}, function () {
					$log.debug('You cancelled the dialog');
				});

			function DialogCtrl($scope, item, $mdDialog) {
				$scope.item = product;

				$scope.hide = function () {
					$mdDialog.hide();
				};
				$scope.close = function () {
					$mdDialog.cancel();
				};
				$scope.answer = function (answer) {
					$mdDialog.hide(answer);
				};
			}
		};


	}]);
