'use strict';

angular.module('projekt2App')
.controller('AdminUserCreateCtrl', ['$scope', '$http', '$state', 'UserService', 'CheckUniqueService', function($scope, $http, $state, UserService, CheckUniqueService) {
	$scope.user = {};
	$scope.errors = {};

	// submit
	$scope.create = function(form) {
		$scope.submitted = true;
//console.log('submit:',form);
//console.log('valid:', form.$valid);
		if (form.$valid) {
//console.log('form.$valid');
//console.log('create user:', $scope.user);
			UserService.create($scope.user).$promise.then(function(result) {
//console.log('created:', result);
				$state.go('admin.user-list');
			});
		}
	};
}]);
