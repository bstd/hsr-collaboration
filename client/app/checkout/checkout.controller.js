'use strict';

angular.module('brewApp')
.controller('CheckoutCtrl', ['$scope', '$state', '$mdDialog', '$log', 'Auth', 'User', 'BasketService', 'CheckoutService', function($scope, $state, $mdDialog, $log, Auth, User, BasketService, CheckoutService) {
  $scope.user = {};
  $scope.order = {};
  $scope.terms = false;
  $scope.errors = {};

  // auth
  $scope.isLoggedIn = Auth.isLoggedIn;
  // user
  if ($scope.isLoggedIn() === true) {
    $scope.user = User.get(function(data) {
      $log.debug('CheckoutCtrl - User.get:',data);
    });
  }

  // basket
  $scope.basketItems = [];
  $scope.basketItems = BasketService.items();
//console.log('CheckoutCtrl basketItems:',$scope.basketItems);

  $scope.empty = BasketService.isEmpty($scope.basketItems.length);
//console.log('$scope.empty:',$scope.empty);

  $scope.basketTotal = BasketService.total();


  // md-dialog for basketPreview
  $scope.showBasket = function() {
    $mdDialog.show({
      controller: BasketDialogCtrl,
      templateUrl: 'app/basket/basket-preview.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      locals: {
        basketPreview: $scope.basketItems
      }
    }).then(function(answer) {
      if (typeof answer !== 'undefined') {
        if (answer === 'edit') {
          $state.go('basket');
        }
      }
    }, function() {
//console.log('You cancelled the dialog');
    });
  };

  function BasketDialogCtrl($scope, basketPreview, $mdDialog) {
    $scope.previewItems = basketPreview;
//console.log('basketPreview:',basketPreview);
//console.log('$scope.previewItems',$scope.previewItems);
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.close = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }


  // md-dialog for terms
  $scope.showTerms = function() {
    $mdDialog.show({
      controller: TermsDialogCtrl,
      templateUrl: 'app/partials/terms.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      locals: {
        terms: $scope.terms
      }
    }).then(function(answer) {
      if (typeof answer !== 'undefined') {
        if (answer === 'accept') {
          $scope.terms = true;
        }
      }
    }, function() {
//console.log('You cancelled the dialog');
    });
  };

  function TermsDialogCtrl($scope, terms, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.close = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }


  // order submit
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
