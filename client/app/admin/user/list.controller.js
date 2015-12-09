'use strict';

angular.module('brewApp')
.controller('AdminUserListCtrl', ['$scope', '$http', '$state', '$mdDialog', 'AdminUserService', 'AdminConfirmDeleteService', function($scope, $http, $state, $mdDialog, AdminUserService, AdminConfirmDeleteService) {
  // confirm dialog
  $scope.confirmDelete = function(user) {
    AdminConfirmDeleteService('Benutzer', user.email).then(function() {
      $state.go('admin.user-destroy', { id: user._id });
    });
  };

  $scope.users = AdminUserService.query();
}]);
