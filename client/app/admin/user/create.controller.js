'use strict';

angular.module('brewApp')
.controller('AdminUserCreateCtrl', ['$scope', '$http', '$state', 'AdminUserService', 'ToastSimpleService', function($scope, $http, $state, AdminUserService, ToastSimpleService) {
  $scope.user = {};
  $scope.errors = {};

  // submit
  $scope.create = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      AdminUserService.create($scope.user).$promise.then(function() {
        $state.go('admin.user-list');
        ToastSimpleService('Benutzer erfolgreich erstellt', 'success');
      })
      .catch( function(err) {
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
