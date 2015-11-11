'use strict';

angular.module('projekt2App', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngMaterial',
	'ui.router',
	'components.constants'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $logProvider) {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
	$httpProvider.interceptors.push('authInterceptor');// using passport example implementation
})
.factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
	return {
		// Add authorization token to headers
		request: function(config) {
			config.headers = config.headers || {};

			if ($cookieStore.get('token')) {
				config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
			}

			return config;
		},

		// Intercept 401s and redirect you to login
		responseError: function(response) {
//console.log('client app - authinterceptor, responseerror:',response);
			if (response.status === 401) {
				$location.path('/login');

				// remove any stale tokens
				$cookieStore.remove('token');

				return $q.reject(response);
			}
			else {
				return $q.reject(response);
			}
		}
	};
})
.run(['$rootScope', '$location', 'Auth', function($rootScope, $location, Auth) {
	// Redirect to login if route requires auth and you're not logged in
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		/*console.log('event:', event);
		console.log('toState:', toState);
		console.log('toParams:', toParams);
		console.log('fromState:', fromState);
		console.log('fromParams:',fromParams);*/

		Auth.isLoggedInAsync(function(loggedIn) {
//console.log('isloggedinasync:',loggedIn);
//console.log('toState.authenticate=', toState.authenticate);
//console.log('loggedIn=', loggedIn);
			if (toState.authenticate && !loggedIn) {
				$location.path('/login');
			}
		});
	});
}]);
