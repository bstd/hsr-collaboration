'use strict';

angular.module('projekt2App')
.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.products = [];

	$http.get('/api/products').success(function(products) {
		$scope.products = products;
	});
}]);
