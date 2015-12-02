'use strict';

angular.module('brewApp')
.factory('ToastSimpleService', ['$mdToast', function($mdToast) {
  return function(msg, parent) {
    $mdToast.show(
      $mdToast.simple()
      .content(msg)
      .parent(parent)
      .position('top right')
      .hideDelay(3000)
    );
  };
}]);
