'use strict';

angular.module('projekt2App')
.controller('AdminUserUpdateCtrl', ['$scope', '$http', '$state', 'UserService', function($scope, $http, $state, UserService) {
//console.log($stateParams);
	$scope.id = $state.params.id;
	$scope.user = {};
	$scope.errors = {};

	// prefill
	$scope.user = UserService.get({ id: $scope.id }).$promise.then(function(data) {
//console.log('queried:',data);
		$scope.user = data;
	});

	// submit
	$scope.update = function(form) {
		 $scope.submitted = true;
//console.log('submit:',form);
//console.log('id:',$scope.id);

		if (form.$valid) {
			// avoid email constraint checks: read-only

			var $id = $scope.id;
//console.log('UserService.update with id:',$id);
			UserService.update({ id: $id }, $scope.user).$promise.then(function() {
				$state.go('admin.user-list');
			});
		}
	};
}]);
