'use strict';

angular.module('brewApp')
.factory('ToastSimpleService', ['$mdToast', function($mdToast) {
  // msg required, theme unused for now, see theme/toast-theme.scss
  return function(msg, theme, parent) {
    $mdToast.show(
      $mdToast.simple()
      .content(msg)
      .parent(parent)
      .position('top right')
      .hideDelay(3000)/*
      .theme('toast-' + theme)*/
    );
  };
}]);
