'use strict';

angular.module('brewApp')
.controller('CheckoutCtrl', ['$scope', '$state', 'BasketService', function($scope, $state, BasketService) {
  $scope.order = {};
  $scope.errors = {};

  $scope.basketItems = [];
  $scope.basketItems = BasketService.items();
console.log('CheckoutCtrl basketItems:',$scope.basketItems);
  $scope.basketTotal = BasketService.total();

  $scope.order = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      // TODO create order

      // then
      //.then(function() {
        $state.go('confirmation');
      //})
      /*
      .catch(function(err) {
        err = err.data;
        $scope.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, function(error, field) {
          form[field].$setValidity('mongoose', false);
          $scope.errors[field] = error.message;
        });
      });
       */
    }
  };
}]);
