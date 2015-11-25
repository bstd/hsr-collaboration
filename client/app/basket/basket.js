'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('basket', {
    url: '/basket',
    title: 'Warenkorb',
    templateUrl: 'app/basket/basket.html',
    controller: 'BasketCtrl',
    //controllerAs: 'Basket',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter Basket');
    },
    onExit: function($log) {
      $log.debug('exit Basket');
    }
  });
});
