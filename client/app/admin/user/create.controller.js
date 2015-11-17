'use strict';

angular.module('brewApp')
.controller('AdminUserCreateCtrl', ['$scope', '$http', '$state', '$log', 'AdminUserService', 'ToastSimpleService', function($scope, $http, $state, $log, AdminUserService, ToastSimpleService) {
  $scope.user = {};
  $scope.errors = {};

  // submit
  $scope.create = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      AdminUserService.create($scope.user, function(result) {
        $log.debug('AdminUserCreateCtrl - AdminUserService.create:',result);
        $state.go('admin.user-list');
        ToastSimpleService('Benutzer erfolgreich erstellt');
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
