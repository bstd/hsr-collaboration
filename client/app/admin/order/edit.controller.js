'use strict';

angular.module('brewApp')
.controller('AdminOrderEditCtrl',  ['$scope', '$http', '$state', '$log', 'AdminOrderService', 'ToastSimpleService', 'CONSTANTS', function($scope, $http, $state, $log, AdminOrderService, ToastSimpleService, CONSTANTS) {
  $scope.id = $state.params.id;
  $scope.order = {};
  $scope.orderStates = [
    { id: CONSTANTS.enums.order.new.key, value: CONSTANTS.enums.order.new.value },
    { id: CONSTANTS.enums.order.open.key, value: CONSTANTS.enums.order.open.value },
    { id: CONSTANTS.enums.order.paid.key, value: CONSTANTS.enums.order.paid.value },
    { id: CONSTANTS.enums.order.done.key, value: CONSTANTS.enums.order.done.value }
  ];// could also be combined with schema.path api/service
  $scope.objOrderState = {};// obj helper for order.state {STRING}
  $scope.errors = {};


  // prefill
  $scope.order = AdminOrderService.get({ id: $scope.id }, function(data) {
    $log.debug('queried:',data);

    // return obj from orderStates by matching order.state
    $scope.objOrderState = _.find($scope.orderStates, function(obj) { return obj.id === $scope.order.state; });
    $log.debug('$scope.objOrderState:',$scope.objOrderState);
  });


  // submit
  $scope.update = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      var $id = $scope.id;

      // save new state as string from our helper obj
      $scope.order.state = $scope.objOrderState.id;

      $log.debug('AdminOrderService.update with id:',$id);
      $log.debug('new state to save:',$scope.order.state);

      AdminOrderService.update({ id: $id }, $scope.order).$promise.then(function() {
        $state.go('admin.order-list');
        ToastSimpleService('Bestellung erfolgreich geändert', 'success');
      })
      .catch(function(err) {
        err = err.data;
        $scope.errors = {};
        $log.debug('persistence error:',err);
      });
    }
  };
}]);
