'use strict';

angular.module('brewApp')
.controller('AdminUserDestroyCtrl', ['$scope', '$http', '$state', '$log', 'AdminUserService', 'ToastSimpleService', function($scope, $http, $state, $log, AdminUserService, ToastSimpleService) {
  $scope.id = $state.params.id;

  AdminUserService.remove({ id: $scope.id }, function(result) {
    $log.debug('AdminUserDestroyCtrl - AdminUserService.remove:',result);
    $state.go('admin.user-list');
    ToastSimpleService('Benutzer erfolgreich gelöscht', 'success');
  });
}]);
