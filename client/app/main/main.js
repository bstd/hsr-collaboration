'use strict';

angular.module('brewApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl',
      //controllerAs: '',
      // restricted
      //authenticate: true,
      onEnter: function($log) {
        $log.debug('enter main');
      },
      onExit: function($log) {
        $log.debug('exit main');
      }
    });
});
