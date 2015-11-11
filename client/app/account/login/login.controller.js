'use strict';

angular.module('projekt2App')
.controller('LoginCtrl', ['$scope', '$state', '$mdToast', 'Auth', function($scope, $state, $mdToast, Auth) {
	$scope.user = {};
	$scope.errors = {};

	// test toast
	$scope.showSimpleToast = function() {
		$mdToast.show(
			$mdToast.simple()
			.content('login successful')
			.position('top right')
			.hideDelay(3000)
		);
	};

	$scope.loginUser = function(form) {
		$scope.submitted = true;

		if (form.$valid) {
			Auth.login({
				email: $scope.user.email,
				password: $scope.user.password
			})
			.then(function() {
				$state.go('settings');
				$scope.showSimpleToast();
			})
			.catch(function(err) {
				$scope.errors.other = err.message;
			});
		}
	};
}]);
