'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('result', {
    url: '/result?query',
    title: 'Suchresultate',
    templateUrl: 'app/result/result.html',
    controller: 'ResultCtrl'
  });
});
