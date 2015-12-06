'use strict';

angular.module('brewApp')
.controller('SidenavCtrl', ['$scope', '$location', '$mdSidenav', 'Auth', 'ToastSimpleService', function($scope, $location, $mdSidenav, Auth, ToastSimpleService) {
  // auth
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;

  // active route
  $scope.isActive = function(route) {
    return route === $location.path();
  };

  // sidenav toggle
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  // logout
  $scope.logout = function() {
    Auth.logout();
    $location.path('/login');
    ToastSimpleService('Abmeldung erfolgreich', 'success');
  };
}]);
