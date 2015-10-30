'use strict';

angular.module('projekt2App')
.config(function($stateProvider) {
	$stateProvider
	.state('admin', {
		url: '/admin',
		templateUrl: 'app/admin/admin.html',
		controller: 'AdminCtrl',
		controllerAs: 'admin',
		onEnter: function($log) {
			$log.debug('enter admin');
		},
		onExit: function($log) {
			$log.debug('exit admin');
		}
	})
	.state('admin.product-list', {
		url: '/products',
		templateUrl: 'app/admin/product/list.html',
		controller: 'AdminProductListCtrl',
		controllerAs: 'admin.product.list',
		onEnter: function($log) {
			$log.debug('enter admin.product-list');
		},
		onExit: function($log) {
			$log.debug('exit admin.product-list');
		}
	});
});