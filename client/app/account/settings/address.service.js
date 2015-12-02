'use strict';

angular.module('brewApp')
.factory('AddressService', function ($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  },
  {
    changeAddress: {
      method: 'PUT',
      params: {
        controller:'address'
      }
    }
  });
});
