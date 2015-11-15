'use strict';
// TODO
angular.module('brewApp')
.controller('AdminUserDestroyCtrl', ['$scope', '$http', '$state', 'AdminUserService', function($scope, $http, $state, AdminUserService) {
  $scope.id = $state.params.id;

  // TODO confirm dialog
  AdminUserService.remove({ id: $scope.id }).$promise.then(function() {
    $state.go('admin.user-list');
  });
}]);
