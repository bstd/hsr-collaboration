'use strict';

angular.module('brewApp')
	.controller('ProductsCreateCtrl', ['$scope', '$http', '$state', '$timeout', 'Upload', 'AdminProductService', 'ToastSimpleService', 'STATES', 'VANITIES', function ($scope, $http, $state, $timeout, Upload, AdminProductService, ToastSimpleService, STATES, VANITIES) {
		$scope.product = {
			active: true
		};
		$scope.errors = {};

		//categories
		$scope.vanities = VANITIES;
		$scope.states = STATES;


		// submit and upload
		$scope.create = function (form) {
			$scope.submitted = true;

			if (form.$valid) {
				form.upload = Upload.upload({
					url: 'api/products',
					data: {
						file: $scope.product.file,
						ean: $scope.product.ean,
						active: $scope.product.active,
						name: $scope.product.name,
						vol: $scope.product.vol,
						price: $scope.product.price,
						info: $scope.product.info,
						stock: $scope.product.stock,
						vanity: $scope.product.vanity,
						country: $scope.product.country
					}
				});

				form.upload.then(function (response) {
						$state.go('admin.product-list');
						ToastSimpleService('Produkt erfolgreich erstellt');
						$timeout(function () {
							form.result = response.data;
						});
					},
					function (response) {
						if (response.status > 0) {
							$scope.errorMsg = response.status + ': ' + response.data;
						}
					},
					function (evt) {
						// Math.min is to fix IE which reports 200% sometimes
						form.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
					});

			}
		};

	}]);
