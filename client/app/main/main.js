'use strict';

angular.module('brewApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    title: 'Startseite',
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  });
});
