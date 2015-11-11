'use strict';

angular.module('projekt2App')
.controller('SettingsCtrl', ['$scope', 'UserAuthService', function($scope, UserAuthService) {
	$scope.user = {};
	$scope.errors = {};

	// prefill
	UserAuthService.get().$promise.then(function(data) {
		$scope.user = data;
	});
}]);
