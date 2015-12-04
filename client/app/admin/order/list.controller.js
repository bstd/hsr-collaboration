'use strict';

angular.module('brewApp')
.controller('AdminOrderListCtrl', ['$scope', '$http', '$state', '$mdDialog', 'AdminOrderService', 'AdminOrderConfirmDeleteService', function($scope, $http, $state, $mdDialog, AdminOrderService, AdminOrderConfirmDeleteService) {
  // confirm dialog
  $scope.confirmDelete = function(order) {
    AdminOrderConfirmDeleteService(order).then(function() {
      $state.go('admin.order-destroy', { id: order._id });
    });
  };

  $scope.orders = AdminOrderService.query();
}]);
