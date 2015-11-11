'use strict';

angular.module('projekt2App')
.factory('UserAuthService', ['$resource', function($resource) {
	return $resource('api/users', {}, {
		get: { method: 'GET', url: '/api/users/me' }
	});
}]);
