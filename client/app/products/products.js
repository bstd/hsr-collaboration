'use strict';

angular.module('projekt2App')
.config(function($stateProvider) {
	$stateProvider
	.state('products', {
		url: '/products',
		templateUrl: 'app/products/products.html',
		controller: 'ProductsCtrl',
		controllerAs: 'products',
		onEnter: function($log) {
			$log.debug('enter products');
		},
		onExit: function($log) {
			$log.debug('exit products');
		}
	});
});