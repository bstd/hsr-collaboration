'use strict';

angular.module('brewApp')
.factory('ProductSearchService', ['$resource', function($resource) {
  return $resource('api/products/:action/:query', {
    query: '@_query'
  },
  {
    search: {
      method: 'GET',
      isArray: true,
      params: {
        action: 'search',
        query: '@_query'
      }
    }
  });
}]);
