'use strict';

angular.module('brewApp')
.controller('HeaderCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
  // auth
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;

  // active route
  $scope.isActive = function(route) {
    return route === $location.path();
  };
}]);
