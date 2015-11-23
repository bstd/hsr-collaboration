'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('edit', {
    url: 'admin/products/edit',
    templateUrl: 'app/admin/products/edit/edit.html',
    controller: 'EditCtrl',
    //controllerAs: 'Edit',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter Edit');
    },
    onExit: function($log) {
      $log.debug('exit Edit');
    }
  });
});
