'use strict';

angular.module('brewApp')
.controller('SettingsCtrl', ['$scope', '$log', 'User', 'Auth', 'ToastSimpleService', function($scope, $log, User, Auth, ToastSimpleService) {
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
        ToastSimpleService('Passwort erfolgreich geändert');
      })
      .catch(function() {
        form.password.$setValidity('mongoose', false);
        $scope.errors.other = 'Incorrect password';// TODO backend error message
      });
    }
  };
}]);
