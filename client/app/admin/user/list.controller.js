'use strict';

angular.module('brewApp')
.controller('AdminUserListCtrl', ['$scope', '$http', '$state', '$mdDialog', 'AdminUserService', 'AdminUserConfirmDeleteService', function($scope, $http, $state, $mdDialog, AdminUserService, AdminUserConfirmDeleteService) {
  // confirm dialog
  $scope.confirmDelete = function(user) {
    AdminUserConfirmDeleteService(user).then(function() {
      $state.go('admin.user-destroy', { id: user._id });
    });
  };

  $scope.users = AdminUserService.query();
}]);
