'use strict';

angular.module('brewApp')
.controller('AdminOrderListCtrl', ['$scope', '$http', '$state', '$mdDialog', 'AdminOrderService', 'AdminConfirmDeleteService', function($scope, $http, $state, $mdDialog, AdminOrderService, AdminConfirmDeleteService) {
  // confirm dialog
  $scope.confirmDelete = function(order) {
    AdminConfirmDeleteService('Bestellung', order.orderId).then(function() {
      $state.go('admin.order-destroy', { id: order._id });
    });
  };

  $scope.orders = AdminOrderService.query();
}]);
