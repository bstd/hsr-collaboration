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
        ToastSimpleService('Anmeldung erfolgreich');
      })
      .catch(function(err) {
console.log(err);
        //$scope.errors.other = err.message;
        form.password.$setValidity('mongoose', false);
        $scope.errors.password = err.message;

        /*err = err.data;
        $scope.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, function(error, field) {
          form[field].$setValidity('mongoose', false);
          $scope.errors[field] = error.message;
        });*/
      });
    }
  };
}]);
