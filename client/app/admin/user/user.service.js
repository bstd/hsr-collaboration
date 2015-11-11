'use strict';

angular.module('projekt2App')
.factory('UserService', ['$resource', function($resource) {
	return $resource('api/users', {}, {
		query: { method: 'GET', isArray: true },
		create: { method: 'POST' },
		get: { method: 'GET', url: '/api/users/:id' },
		remove: { method: 'DELETE', url: '/api/users/:id' },
		update: { method: 'PUT', url: '/api/users/:id' }
	});
}]);
