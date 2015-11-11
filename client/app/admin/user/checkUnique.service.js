'use strict';

angular.module('projekt2App')
.factory('CheckUniqueService', ['$resource', function($resource) {
	return $resource('api/checkUnique', {}, {
		get: { method: 'GET', url: '/api/checkUnique/:id' }
	});
}]);
