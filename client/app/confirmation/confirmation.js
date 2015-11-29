'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('confirmation', {
    url: '/confirmation',
    title: 'Bestellbestätigung',
    templateUrl: 'app/confirmation/confirmation.html',
    controller: 'ConfirmationCtrl',
    //controllerAs: 'Confirmation',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter Confirmation');
    },
    onExit: function($log) {
      $log.debug('exit Confirmation');
    }
  });
});
