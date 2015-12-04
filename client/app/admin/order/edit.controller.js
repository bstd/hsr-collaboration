'use strict';

angular.module('brewApp')
.controller('AdminOrderEditCtrl',  ['$scope', '$http', '$state', '$log', 'AdminOrderService', function($scope, $http, $state, $log, AdminOrderService) {
    $log.debug($state.params);
    $scope.id = $state.params.id;
    $scope.order = {};
    $scope.errors = {};

    // prefill
    $scope.order = AdminOrderService.get({ id: $scope.id }, function(data) {
      $log.debug('queried:',data);
    });

    // submit
    $scope.update = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        var $id = $scope.id;

        $log.debug('AdminOrderService.update with id:',$id);

        AdminOrderService.update({ id: $id }, $scope.order, function() {
          $state.go('admin.order-list');
        });
      }
    };
  }]);
