'use strict';

angular.module('brewApp')
.controller('CheckoutCtrl', ['$scope', '$state', '$mdDialog', '$log', 'Auth', 'User', 'BasketService', 'CheckoutService', 'ToastSimpleService', function($scope, $state, $mdDialog, $log, Auth, User, BasketService, CheckoutService, ToastSimpleService) {
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

  $scope.empty = BasketService.isEmpty($scope.basketItems.length);

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
      $log.debug('You cancelled the dialog');
    });
  };

  function BasketDialogCtrl($scope, basketPreview, $mdDialog) {
    $scope.previewItems = basketPreview;

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
      $log.debug('You cancelled the dialog');
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
      // create order
      $scope.order = {
        userEmail: $scope.user.email,
        addressLastName: $scope.user.lastName,
        addressFirstName: $scope.user.firstName,
        addressStreet: $scope.user.street,
        addressZip: $scope.user.zip,
        addressCity: $scope.user.city,
        total: $scope.basketTotal,
        products: $scope.basketItems
      };

      CheckoutService.create($scope.order).$promise.then(function() {
        $state.go('confirmation');
        ToastSimpleService('Bestellung erfolgreich abgeschickt', 'success');
      })
      .catch(function(err) {
        err = err.data;
        $scope.errors = {};
        $log.debug('persistence error:',err);
      });
    }
  };
}]);
