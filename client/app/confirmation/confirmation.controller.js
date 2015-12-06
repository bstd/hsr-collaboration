'use strict';

angular.module('brewApp')
.controller('ConfirmationCtrl', ['$scope', 'BasketService', function($scope, BasketService) {
  // reset basket
  BasketService.clear();
}]);
