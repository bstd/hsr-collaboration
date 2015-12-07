'use strict';

angular.module('brewApp')
.factory('MyOrdersService', function ($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  },
  {
    getMyOrders: {
      method: 'GET',
      params: {
        id: 'me',
        controller: 'orders'
      },
      isArray: true
    }
  });
});
