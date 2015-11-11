'use strict';

angular.module('projekt2App')
.controller('RegistrationCtrl', ['$scope', '$http', '$state', 'UserService', 'CheckUniqueService', 'Auth', function($scope, $http, $state, UserService, CheckUniqueService, Auth) {
	$scope.user = {};
	$scope.errors = {};

	// submit
	$scope.register = function(form) {
		$scope.submitted = true;

		if (form.$valid) {
//console.log('form.$valid');
//console.log('create user:', $scope.user);
			UserService.create($scope.user).$promise.then(function(result) {
//console.log('created:', result);
				// when created, try login
				Auth.login({
					email: $scope.user.email,
					password: $scope.user.password
				})
				.then(function() {
//console.log('auth.login then');
					$state.go('settings');
				})
				.catch(function(err) {
					$scope.errors.other = err.message;
				});
			});
		}
	};
}]);
