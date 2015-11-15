'use strict';

angular.module('brewApp')
.factory('ProductService', ['$resource', function($resource) {
  return $resource('api/products', {}, {
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' },
    get: { method: 'GET', url: '/api/products/:id' },
    remove: { method: 'DELETE', url: '/api/products/:id' },
    update: { method: 'PUT', url: '/api/products/:id' }
  });
}]);
