'use strict';

angular.module('brewApp')
.controller('ProductsCreateCtrl', ['$scope', '$http', '$state', '$timeout', 'Upload', 'AdminProductService', 'ToastSimpleService', function($scope, $http, $state, $timeout, Upload, AdminProductService, ToastSimpleService) {
    $scope.product = {};
    $scope.errors = {};

    // submit
    $scope.create = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        AdminProductService.create($scope.product).$promise.then(function() {
          $state.go('admin.product-list');
          ToastSimpleService('Produkt erfolgreich erstellt');
        })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
      }
    };
  }]);
