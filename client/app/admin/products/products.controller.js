'use strict';

angular.module('brewApp')
.controller('ProductsCtrl', ['$scope', '$http', '$state', '$mdDialog', 'AdminProductService', 'AdminProductConfirmDeleteService', function($scope, $http, $state, $mdDialog, AdminProductService, AdminProductConfirmDeleteService) {
    // confirm dialog
    $scope.confirmDelete = function(product) {
      AdminProductConfirmDeleteService(product).then(function() {
        $state.go('admin.product-destroy', { id: product._id });
      });
    };
    // get productslist
    $scope.products = AdminProductService.query();
  }]);
