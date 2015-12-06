'use strict';

angular.module('brewApp')
.controller('ProductsEditCtrl',  ['$scope', '$http', '$state', '$log', 'AdminProductService', function($scope, $http, $state, $log, AdminProductService) {
    $log.debug($state.params);
    $scope.id = $state.params.id;
    $scope.product = {};
    $scope.errors = {};

    //ToDo Pic Upload for Update

    // prefill
    $scope.product = AdminProductService.get({ id: $scope.id }, function(data) {
      $log.debug('queried:',data);
    });

    // submit
    $scope.update = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        var $id = $scope.id;

        $log.debug('AdminProductService.update with id:',$id);

        AdminProductService.update({ id: $id }, $scope.product, function() {
          $state.go('admin.product-list');
        });
      }
    };
  }]);
