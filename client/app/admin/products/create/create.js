//ToDo API connection
'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('ProductsCreate', {
    url: '/admin/products/create',
    templateUrl: 'app/admin/products/ProductsCreate/ProductsCreate.html',
    controller: 'ProductsCreateCtrl',
    //controllerAs: 'ProductsCreate',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter ProductsCreate');
    },
    onExit: function($log) {
      $log.debug('exit ProductsCreate');
    }
  });
});
