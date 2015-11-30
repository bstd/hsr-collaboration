'use strict';

angular.module('brewApp')
.controller('ProductsCreateCtrl', ['$scope', '$http', '$state', '$timeout', 'Upload', 'AdminProductService', 'ToastSimpleService', function($scope, $http, $state, $timeout, Upload, AdminProductService, ToastSimpleService) {
    $scope.product = {};
    $scope.errors = {};

    // submit
    $scope.create = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        /*AdminProductService.create($scope.product).$promise.then(function() {
          $state.go('admin.product-list');
          ToastSimpleService('Produkt erfolgreich erstellt');
        })*/
        console.log('create');
        console.log(form);
        var product = new AdminProductService({
          name: this.name,
          info: this.info,
          price: this.price,
          active: this.active,
          image: null
        });
        console.log(product);
        Upload.upload({
          url: 'api/products',
          method: 'POST',
          data: $scope.product,
          file: form
        }).success(function (response, status) {
          $state.go('admin.product-list');

          $scope.name = '';
          $scope.info = '';
        }).error(function (err) {
          $scope.error = err.data.message;
        });
      }
    };
  }]);
