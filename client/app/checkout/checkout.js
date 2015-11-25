'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('checkout', {
    url: '/checkout',
    title: 'Bestellen',
    templateUrl: 'app/checkout/checkout.html',
    controller: 'CheckoutCtrl',
    //controllerAs: 'Checkout',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter Checkout');
    },
    onExit: function($log) {
      $log.debug('exit Checkout');
    }
  });
});
