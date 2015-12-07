'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('productdetail', {
    url: '/productdetail/:id',
    templateUrl: 'app/productdetail/productdetail.html',
    controller: 'ProductDetailCtrl',
    //controllerAs: 'ProductDetail',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter ProductDetail');
    },
    onExit: function($log) {
      $log.debug('exit ProductDetail');
    }
  });
});
