'use strict';

angular.module('brewApp')
.controller('SettingsCtrl', ['$scope', '$state', '$log', '$document', 'User', 'Auth', 'AddressService', 'MyOrdersService', 'ToastSimpleService', function($scope, $state, $log, $document, User, Auth, AddressService, MyOrdersService, ToastSimpleService) {
  $scope.user = {};
  $scope.errors = {};
  $scope.myOrders = {};

  // prefill
  $scope.user = User.get(function(data) {
    $log.debug('SettingsCtrl - User.get:',data);
  });

  // change password
  $scope.changePassword = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
      .then(function() {
        ToastSimpleService('Passwort erfolgreich geändert', 'success');
      })
      .catch(function(err) {
        if (typeof err.status !== 'undefined') {
          if (err.status === 403) {
            form.oldPassword.$setValidity('mongoose', false);
            $scope.errors.oldPassword = 'Passwort falsch';
          }
        }
        else {
          form.oldPassword.$setValidity('mongoose', false);
          $scope.errors.oldPassword = err.data;
        }
      });
    }
  };


  // change address
  $scope.changeAddress = function(addressForm) {
    $scope.submitted2 = true;

    if (addressForm.$valid) {
      var $id = $scope.user._id,
          addressData = {
            'lastName': $scope.user.lastName,
            'firstName': $scope.user.firstName,
            'street': $scope.user.street,
            'zip': $scope.user.zip,
            'city': $scope.user.city
          };

      $log.debug('AddressService.changeAddress with id:',$id);

      AddressService.changeAddress({ id: $id }, addressData).$promise.then(function() {
        var posHelper = $document[0].querySelector('.js-toast-parent');

        ToastSimpleService('Rechnungsadresse erfolgreich geändert', 'success', posHelper);
      })
      .catch(function(err) {
        err = err.data;
        $scope.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, function(error, field) {
          addressForm[field].$setValidity('mongoose', false);
          $scope.errors[field] = error.message;
        });
      });
    }
  };


  // my orders
  $scope.myOrders = MyOrdersService.getMyOrders();
}]);
