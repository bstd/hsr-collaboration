'use strict';

angular.module('projekt2App')
.config(function($stateProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/home/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'home',
		onEnter: function() {
			// debug only
			console.log('enter home');
		},
		onExit: function() {
			// debug only
			console.log('exit home');
		}
	});
});