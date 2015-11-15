'use strict';

angular.module('brewApp')
.controller('AdminUserListCtrl', ['$scope', '$http', 'AdminUserService', function($scope, $http, AdminUserService) {
  $scope.users = AdminUserService.query();
}]);
