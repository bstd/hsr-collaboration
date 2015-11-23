'use strict';

angular
  .module('brewApp.products', [
    'ngResource',
    'ui.router',
    'brewApp.products.main',
    'brewApp.products.list',
    'brewApp.products.create'
  ])
.config(function($stateProvider) {
  $stateProvider
  .state('products', {
    url: '/admin/products',
    templateUrl: 'app/admin/products/products.html',
    controller: 'ProductsCtrl',
    //controllerAs: 'Products',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter Products');
    },
    onExit: function($log) {
      $log.debug('exit Products');
    }
  });
});
