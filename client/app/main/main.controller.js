'use strict';

angular.module('beershopApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeProducts = [];

    $http.get('/api/products').success(function(awesomeProducts) {
      $scope.awesomeProducts = awesomeProducts;
    });

    $scope.addProduct = function() {
      if($scope.newProduct === '') {
        return;
      }
      $http.post('/api/products', { name: $scope.newProduct });
      $scope.newProduct = '';
    };

    $scope.deleteProduct = function(product) {
      $http.delete('/api/products/' + product._id);
    };
  });
