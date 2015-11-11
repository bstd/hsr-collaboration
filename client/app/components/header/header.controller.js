'use strict';

angular.module('projekt2App')
.controller('HeaderCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
	/*console.log('$state.data:',$state.data);
	console.log('$state.params:',$state.params);
	console.log('$state.ownParams:', $state.ownParams);*/
	// auth
	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.isAdmin = Auth.isAdmin;

	// active route
	$scope.isActive = function(route) {
		return route === $location.path();
	};
}]);
