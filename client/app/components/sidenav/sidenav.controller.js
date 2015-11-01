'use strict';

// sidenav
angular.module('projekt2App')
.controller('SidenavCtrl', ['$scope', '$mdSidenav', '$log', function($scope, $mdSidenav, $log) {
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};
}]);
