'use strict';

angular.module('brewApp')
.controller('LoginCtrl', ['$scope', '$state', 'Auth', 'ToastSimpleService', function($scope, $state, Auth, ToastSimpleService) {
  $scope.user = {};
  $scope.errors = {};

  $scope.loginUser = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      Auth.login({
        email: $scope.user.email,
        password: $scope.user.password
      })
      .then(function() {
        $state.go('main');
        ToastSimpleService('Anmeldung erfolgreich', 'success');
      })
      .catch(function(err) {
        form.password.$setValidity('mongoose', false);
        $scope.errors.password = err.message;
      });
    }
  };
}]);
