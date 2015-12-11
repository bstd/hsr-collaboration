'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    title: 'Anmeldung',
    templateUrl: 'app/account/login/login.html',
    controller: 'LoginCtrl'
  })
  .state('registration', {
    url: '/registration',
    title: 'Registrierung',
    templateUrl: 'app/account/registration/registration.html',
    controller: 'RegistrationCtrl'
  })
  .state('settings', {
    url: '/settings',
    title: 'Persönlicher Bereich',
    templateUrl: 'app/account/settings/settings.html',
    controller: 'SettingsCtrl',
    // restricted
    authenticate: true
  });
});
