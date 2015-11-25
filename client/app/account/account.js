'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    title: 'Anmeldung',
    templateUrl: 'app/account/login/login.html',
    controller: 'LoginCtrl',
    //controllerAs: 'login',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter login');
    },
    onExit: function($log) {
      $log.debug('exit login');
    }
  })
  .state('registration', {
    url: '/registration',
    title: 'Registrierung',
    templateUrl: 'app/account/registration/registration.html',
    controller: 'RegistrationCtrl',
    //controllerAs: 'registration',
    // restricted
    //authenticate: true,
    onEnter: function($log) {
      $log.debug('enter registration');
    },
    onExit: function($log) {
      $log.debug('exit registration');
    }
  })
  .state('settings', {
    url: '/settings',
    title: 'Persönlicher Bereich',
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
