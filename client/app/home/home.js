'use strict';

angular.module('projekt2App')
.config(function($stateProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/home/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'home',
		/*data: {
			access: 'access-dummy'
		},
		params: {
			test: 'params-dummy'
		},
		ownParams: {
			test: 'ownParams-dummy'
		},*/
		onEnter: function($log) {
			$log.debug('enter home');
		},
		onExit: function($log) {
			$log.debug('exit home');
		}
	});
});
