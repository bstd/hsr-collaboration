'use strict';

angular.module('brewApp')
.controller('RegistrationCtrl', ['$scope', '$state', 'Auth', 'ToastSimpleService', function($scope, $state, Auth, ToastSimpleService) {
  $scope.user = {};
  $scope.errors = {};

  $scope.register = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      Auth.createUser({
        email: $scope.user.email,
        password: $scope.user.password
      })
      .then(function() {
        $state.go('main');
        ToastSimpleService('Registrierung erfolgreich', 'success');
      })
      .catch(function(err) {
        err = err.data;
        $scope.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, function(error, field) {
          form[field].$setValidity('mongoose', false);
          $scope.errors[field] = error.message;
        });
      });
    }
  };
}]);
