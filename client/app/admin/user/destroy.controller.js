'use strict';

angular.module('projekt2App')
.controller('AdminUserDestroyCtrl', ['$scope', '$http', '$state', 'UserService', function($scope, $http, $state, UserService) {
	$scope.id = $state.params.id;

	// TODO confirm dialog
	UserService.remove({ id: $scope.id }).$promise.then(function() {
		$state.go('admin.user-list');
	});
}]);
