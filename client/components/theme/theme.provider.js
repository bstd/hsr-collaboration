'use strict';

// theme configuration
angular.module('brewApp')
.config(function($mdThemingProvider) {
  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });

  $mdThemingProvider.definePalette('customBlue', customBlueMap);

  $mdThemingProvider.theme('default')
      .primaryPalette('amber')
    .accentPalette('pink');

  $mdThemingProvider.theme('input', 'default')
    .primaryPalette('grey');

  $mdThemingProvider.theme('toast-error');
  $mdThemingProvider.theme('toast-success');
  $mdThemingProvider.theme('toast-info');
});
