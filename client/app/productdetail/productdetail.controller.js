'use strict';

angular.module('brewApp')
.controller('ProductDetailCtrl', ['$scope', '$state', '$stateParams', 'ProductService', function($scope, $state, $stateParams, ProductService) {

    $scope.product = ProductService.get({ id: $stateParams.id });

}]);
