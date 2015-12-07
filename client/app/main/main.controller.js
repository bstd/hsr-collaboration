'use strict';

angular.module('brewApp')
.controller('MainCtrl', ['$scope', '$http', '$state', '$stateParams', 'ProductService', function($scope, $http, $state, $stateParams, ProductService) {
  $scope.products = [];

  $scope.vanities = [ '', 'Lagerbier', 'Spezialbier', 'Dunkles Bier', 'Naturtrübes Bier', 'Alkoholfreies Bier', 'Altbier',
      'Pale Ale', 'Festbier (Bockbier)', 'Porter', 'Schwarzbier', 'Stout', 'Kohlenhydratarmes Bier', 'Leichtbier (alkoholarm)',
      'Mais-, Reisbier', 'Mehrkornbier', 'Starkbier', 'Holzfassgereifte Biere', 'Weizenbier (Weissbier)', 'Biermischgetränke' ];

  $scope.states = [ '', 'Schweiz', 'Deutschland', 'Tschechien', 'Britannien', 'Irland', 'Belgien', 'Holland', 'Dänemark',
      'Frankreich', 'Österreich', 'USA', 'Kanada', 'Mexico' ];

  $scope.products = ProductService.query();
}]);
