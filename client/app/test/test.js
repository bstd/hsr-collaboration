'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('test',{
    url: '/test',
    templateUrl: 'app/test/test.html',
    controller: 'TestCtrl',
    //controllerAs: 'test',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter test');
    },
    onExit: function($log) {
      $log.debug('exit test');
    }
  }).state('test.icons',{
    url: '/test/icons',
    templateUrl: 'app/test/icons/icons.html',
    controller: 'TestIconListCtrl',
    //controllerAs: 'test.icons',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter test.icons');
    },
    onExit: function($log) {
      $log.debug('exit test.icons');
    }
  });
});
