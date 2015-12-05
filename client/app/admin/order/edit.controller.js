'use strict';

angular.module('brewApp')
.controller('AdminOrderEditCtrl',  ['$scope', '$http', '$state', '$log', 'AdminOrderService', 'ToastSimpleService', function($scope, $http, $state, $log, AdminOrderService, ToastSimpleService) {
    $scope.id = $state.params.id;
    $scope.order = {};
    $scope.orderStates = [
      { id: 'new', value: 'neu' },
      { id: 'open', value: 'Rechnung offen' },
      { id: 'paid', value: 'bezahlt' },
      { id: 'done', value: 'abgeschlossen' }
    ];// TODO CONSTANTS (could also be combined with schema.path api/service)
    $scope.objOrderState = {};// obj helper for order.state {STRING}
    $scope.errors = {};


    // prefill
    $scope.order = AdminOrderService.get({ id: $scope.id }, function(data) {
      $log.debug('queried:',data);

      // return obj from orderStates by matching order.state
      $scope.objOrderState = _.find($scope.orderStates, function(obj) { return obj.id === $scope.order.state });
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

        //AdminOrderService.update({ id: $id }, $scope.order, function() {
        AdminOrderService.update({ id: $id }, $scope.order).$promise.then(function() {
          $state.go('admin.order-list');
          ToastSimpleService('Bestellung erfolgreich geändert');
        })
        .catch(function(err) {
          err = err.data;
          $scope.errors = {};
  console.log('mongo err:',err);
          // Update validity of form fields that match the mongoose errors
          /*angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });*/
        });
      }
    };
  }]);
