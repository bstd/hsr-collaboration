'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('result', {
    url: '/result?query',
    title: 'Suchresultate',
    templateUrl: 'app/result/result.html',
    controller: 'ResultCtrl',
    //controllerAs: 'Result',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter Result');
    },
    onExit: function($log) {
      $log.debug('exit Result');
    }
  });
});
