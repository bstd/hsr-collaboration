'use strict';

angular.module('brewApp')
.controller('ProductsEditCtrl',  ['$scope', '$http', '$state', '$timeout', '$log', 'Upload', 'AdminProductService', 'ToastSimpleService', function($scope, $http, $state, $timeout, $log, Upload, AdminProductService, ToastSimpleService) {
    $log.debug($state.params);
    $scope.id = $state.params.id;
    $scope.product = {};
    $scope.errors = {};

    //ToDo Pic Upload for Update

    // prefill
    $scope.product = AdminProductService.get({ id: $scope.id }, function(data) {
      //$log.debug('queried:',data);
    });

    // submit
    $scope.update = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        var $id = $scope.id;

        //ToDo product Object
        form.upload = Upload.upload({
          url: '/api/products/'+$id,
          method: 'PUT',
          data: {
            file: $scope.product.file,
            active: $scope.product.active,
            name: $scope.product.name,
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
        }, function (response) {
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          // Math.min is to fix IE which reports 200% sometimes
          form.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });

        /*$log.debug('AdminProductService.update with id:',$id);

        AdminProductService.update({ id: $id }, $scope.product, function() {
          $state.go('admin.product-list');
        });*/
      }
    };
  }]);
