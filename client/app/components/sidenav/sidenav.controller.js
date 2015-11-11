'use strict';

angular.module('projekt2App')
.controller('SidenavCtrl', ['$scope', '$location', '$mdSidenav', '$mdToast', '$log', 'Auth', function($scope, $location, $mdSidenav, $mdToast, $log, Auth) {
	// auth
	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.isAdmin = Auth.isAdmin;

	// test toast
	$scope.showSimpleToast = function() {
		$mdToast.show(
			$mdToast.simple()
			.content('logout successful')
			.position('top right')
			.hideDelay(3000)
		);
	};

	// active route
	$scope.isActive = function(route) {
		return route === $location.path();
	};

	// sidenav toggle
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	// logout
	$scope.logout = function() {
		Auth.logout();
		$location.path('/login');
		$scope.showSimpleToast();
	};
}]);
