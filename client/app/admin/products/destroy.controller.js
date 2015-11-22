'use strict';

angular.module('brewApp')
.controller('ProductsDestroyCtrl', ['$scope', '$http', '$state', '$log', 'AdminProductService', 'ToastSimpleService', function($scope, $http, $state, $log, AdminProductService, ToastSimpleService) {
    $scope.id = $state.params.id;

    AdminProductService.remove({ id: $scope.id }, function(result) {
      $log.debug('ProductsDestroyCtrl - AdminProductService.remove:',result);
      $state.go('admin.product-list');
      ToastSimpleService('Produkt erfolgreich gelöscht');
    });
  }]);
