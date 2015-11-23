'use strict';

angular.module('brewApp')
.factory('AdminUserService', ['$resource', function($resource) {
  return $resource('api/users', {}, {
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' },
    get: { method: 'GET', url: '/api/users/:id' },
    remove: { method: 'DELETE', url: '/api/users/:id' }
  });
}]);
