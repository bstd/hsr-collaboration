'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('product', {
    url: '/product',
    templateUrl: 'app/product/product.html',
    controller: 'ProductCtrl',
    //controllerAs: 'Product',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter Product');
    },
    onExit: function($log) {
      $log.debug('exit Product');
    }
  });
});
