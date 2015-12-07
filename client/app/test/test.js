'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('test',{
    url: '/test',
    title: 'Testseiten',
    templateUrl: 'app/test/test.html',
    controller: 'TestCtrl',
  })
  .state('test.icons',{
    url: '/test/icons',
    title: 'Test - Icons',
    templateUrl: 'app/test/icons/icons.html',
    controller: 'TestIconListCtrl',
  })
  .state('test.flex',{
    url: '/test/flex',
    title: 'Test - Flexbox',
    templateUrl: 'app/test/flex/flex.html',
    controller: 'TestFlexCtrl',
  });
});
