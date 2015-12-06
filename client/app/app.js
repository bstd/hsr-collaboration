'use strict';

angular.module('brewApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngMaterial',
  'ngMessages',
  'ui.router',
  'ngFileUpload',
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
      if (response.status === 401) {// || response.status === 403
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

.run(function($rootScope, $location, Auth, ToastSimpleService) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    /*console.log('event:', event);
    console.log('toState:', toState);
    console.log('toParams:', toParams);
    console.log('fromState:', fromState);
    console.log('fromParams:',fromParams);*/

    // Redirect to login if route requires auth and you're not logged in
    Auth.isLoggedInAsync(function(loggedIn) {
      if (toState.authenticate && !loggedIn) {
//console.log('AUTH REDIRECT');
        $location.path('/login');
        ToastSimpleService('Zugriffsfehler: Sie müssen angemeldet sein', 'error');
      }

      // redirect to login if route requires admin role and authed user !isAdmin
      if (toState.role === 'admin') {
        var isAdmin = Auth.isAdmin();

        if (!isAdmin) {
//console.log('ROLE REDIRECT');
          $location.path('/');
          ToastSimpleService('Zugriffsfehler: Keine Rechte', 'error');
        }
      }
    });
  });

  // document title -> route title
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    document.title = toState.title ? toState.title : 'brew Shop';
  });
});
