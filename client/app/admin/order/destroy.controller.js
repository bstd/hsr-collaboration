'use strict';

angular.module('brewApp')
.controller('AdminOrderDestroyCtrl', ['$scope', '$http', '$state', '$log', 'AdminOrderService', 'ToastSimpleService', function($scope, $http, $state, $log, AdminOrderService, ToastSimpleService) {
  $scope.id = $state.params.id;

  AdminOrderService.remove({ id: $scope.id }, function(result) {
    //$log.debug('AdminOrderConfirmDeleteService - AdminOrderService.remove:',result);
    $state.go('admin.order-list');
    ToastSimpleService('Bestellung erfolgreich gelöscht', 'success');
  });
}]);
