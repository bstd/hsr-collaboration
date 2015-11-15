'use strict';
// TODO
angular.module('brewApp')
.controller('AdminUserUpdateCtrl', ['$scope', '$http', '$state', 'AdminUserService', function($scope, $http, $state, AdminUserService) {
//console.log($stateParams);
	$scope.id = $state.params.id;
	$scope.user = {};
	$scope.errors = {};

	// prefill
	$scope.user = AdminUserService.get({ id: $scope.id }).$promise.then(function(data) {
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
//console.log('AdminUserService.update with id:',$id);
			AdminUserService.update({ id: $id }, $scope.user).$promise.then(function() {
				$state.go('admin.user-list');
			});
		}
	};
}]);
