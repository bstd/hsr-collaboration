'use strict';

angular.module('brewApp')
	.controller('ProductsEditCtrl', ['$scope', '$http', '$state', '$timeout', '$log', 'Upload', 'AdminProductService', 'ToastSimpleService', 'STATES', 'VANITIES', function ($scope, $http, $state, $timeout, $log, Upload, AdminProductService, ToastSimpleService, STATES, VANITIES) {
		$log.debug($state.params);
		$scope.id = $state.params.id;
		$scope.product = {};
		$scope.errors = {};

		//categories
		$scope.vanities = VANITIES;
		$scope.states = STATES;

		// prefill
		$scope.product = AdminProductService.get({id: $scope.id}, function (data) {
			//$log.debug('queried:',data);
		});

		// submit and upload
		$scope.update = function (form) {
			$scope.submitted = true;

			if (form.$valid) {
				var $id = $scope.id;

				//ToDo product Object
				form.upload = Upload.upload({
					url: '/api/products/' + $id,
					method: 'PUT',
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
						ToastSimpleService('Produkt erfolgreich editiert');
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
