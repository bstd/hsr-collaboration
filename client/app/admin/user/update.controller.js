'use strict';

angular.module('brewApp')
.controller('AdminUserUpdateCtrl', ['$scope', '$http', '$state', '$log', 'AdminUserService', function($scope, $http, $state, $log, AdminUserService) {
  $log.debug($state.params);
  $scope.id = $state.params.id;
  $scope.user = {};
  $scope.errors = {};

  // prefill
  $scope.user = AdminUserService.get({ id: $scope.id }, function(data) {
    $log.debug('queried:',data);
  });

  // submit
  $scope.update = function(form) {
     $scope.submitted = true;

    if (form.$valid) {
      var $id = $scope.id;

      $log.debug('AdminUserService.update with id:',$id);

      AdminUserService.update({ id: $id }, $scope.user, function() {
        $state.go('admin.user-list');
      });
    }
  };
}]);
