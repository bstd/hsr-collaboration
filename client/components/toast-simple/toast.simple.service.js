'use strict';

angular.module('brewApp')
.factory('ToastSimpleService', ['$mdToast', function($mdToast) {
  return function(msg) {
    $mdToast.show(
      $mdToast.simple()
      .content(msg)
      .position('top right')
      .hideDelay(3000)
    );
  };
}]);
