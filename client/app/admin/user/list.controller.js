'use strict';

angular.module('projekt2App')
.controller('AdminUserListCtrl', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
	$scope.users = [];

	UserService.query().$promise.then(function(data) {
		$scope.users = data;
	});
}]);
