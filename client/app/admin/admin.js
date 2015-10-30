'use strict';

angular.module('projekt2App')
.config(function($stateProvider) {
	$stateProvider
	.state('admin', {
		url: '/admin',
		templateUrl: 'app/admin/admin.html',
		controller: 'AdminCtrl',
		controllerAs: 'admin',
		onEnter: function() {
			// debug only
			console.log('enter admin');
		},
		onExit: function() {
			// debug only
			console.log('exit admin');
		}
	})
	.state('admin.product-list', {
		url: '/products',
		templateUrl: 'app/admin/product/list.html',
		controller: 'AdminProductListCtrl',
		controllerAs: 'admin.product.list',
		onEnter: function() {
			// debug only
			console.log('enter admin.product-list');
		},
		onExit: function() {
			// debug only
			console.log('exit admin.product-list');
		}
	});
});