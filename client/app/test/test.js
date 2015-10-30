'use strict';

angular.module('projekt2App')
.config(function ($stateProvider) {
	$stateProvider
	.state('test', {
		url: '/test',
		templateUrl: 'app/test/test.html',
		controller: 'TestCtrl',
		controllerAs: 'test',
		onEnter: function() {
			// debug only
			console.log('enter test');
		},
		onExit: function() {
			// debug only
			console.log('exit test');
		}
	}).state('test.icons', {
		url: '/test/icons',
		templateUrl: 'app/test/icons/icons.html',
		controller: 'TestIconListCtrl',
		controllerAs: 'test.icons',
		onEnter: function() {
			// debug only
			console.log('enter test.icons');
		},
		onExit: function() {
			// debug only
			console.log('exit test.icons');
		}
	});
});