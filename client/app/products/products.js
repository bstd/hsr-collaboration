'use strict';

angular.module('projekt2App')
.config(function ($stateProvider) {
	$stateProvider
	.state('products', {
		url: '/products',
		templateUrl: 'app/products/products.html',
		controller: 'ProductsCtrl',
		controllerAs: 'products',
		onEnter: function() {
			// debug only
			console.log('enter products');
		},
		onExit: function() {
			// debug only
			console.log('exit products');
		}
	});
});