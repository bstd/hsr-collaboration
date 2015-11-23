'use strict';

angular.module('brewApp')
.controller('SettingsCtrl', ['$scope', '$state', '$log', 'User', 'Auth', 'ToastSimpleService', function($scope, $state, $log, User, Auth, ToastSimpleService) {
  $scope.user = {};
  $scope.errors = {};

  // prefill
  $scope.user = User.get(function(data) {
    $log.debug('SettingsCtrl - User.get:',data);
  });

  $scope.changePassword = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
      .then(function() {
        $state.go('main');
        ToastSimpleService('Passwort erfolgreich geändert');
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
}]);
