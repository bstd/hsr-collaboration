'use strict';

angular.module('brewApp')
.controller('ProductsCtrl', ['$scope', '$http', '$state', '$mdDialog', 'AdminProductService', 'AdminConfirmDeleteService', function($scope, $http, $state, $mdDialog, AdminProductService, AdminConfirmDeleteService) {
    // confirm dialog
    $scope.confirmDelete = function(product) {
      AdminConfirmDeleteService('Produkt', product.name).then(function() {
        $state.go('admin.product-destroy', { id: product._id });
      });
    };
    // get productslist
    $scope.products = AdminProductService.query();
  }]);
