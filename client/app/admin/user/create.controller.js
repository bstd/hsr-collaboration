'use strict';

angular.module('brewApp')
.controller('AdminUserCreateCtrl', ['$scope', '$http', '$state', 'AdminUserService', function($scope, $http, $state, AdminUserService) {
  $scope.user = {};
  $scope.errors = {};

  // submit
  $scope.create = function(form) {
    $scope.submitted = true;
//console.log('submit:',form);
//console.log('valid:', form.$valid);
    if (form.$valid) {
//console.log('form.$valid');
//console.log('create user:', $scope.user);
      AdminUserService.create($scope.user).$promise.then(function(result) {
        //$location.path('/');
        $state.go('admin.user-list');
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
