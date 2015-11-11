'use strict';

angular.module('projekt2App')
.config(function($stateProvider) {
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: 'app/account/login/login.html',
		controller: 'LoginCtrl',
		controllerAs: 'login',
		onEnter: function($log) {
			$log.debug('enter login');
		},
		onExit: function($log) {
			$log.debug('exit login');
		}
	})
	.state('registration', {
		url: '/registration',
		templateUrl: 'app/account/registration/registration.html',
		controller: 'RegistrationCtrl',
		controllerAs: 'registration',
		onEnter: function($log) {
			$log.debug('enter registration');
		},
		onExit: function($log) {
			$log.debug('exit registration');
		}
	})
	.state('settings', {
		url: '/settings',
		templateUrl: 'app/account/settings/settings.html',
		controller: 'SettingsCtrl',
		controllerAs: 'settings',
		// restricted
		authenticate: true,
		onEnter: function($log) {
			$log.debug('enter settings');
		},
		onExit: function($log) {
			$log.debug('exit settings');
		}
	});
});