'use strict';

// theme configuration
angular.module('brewApp')
.config(function($mdThemingProvider) {
  var customAmberMap = $mdThemingProvider.extendPalette('amber', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });

  $mdThemingProvider.definePalette('customAmberMap', customAmberMap);

  $mdThemingProvider.theme('default')
      .primaryPalette('customAmberMap', {
        'default': '700', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '100' // use shade 100 for the <code>md-hue-1</code> class
      })
    .accentPalette('pink');

  $mdThemingProvider.theme('input', 'default')
    .primaryPalette('grey');

  $mdThemingProvider.theme('toast-error');
  $mdThemingProvider.theme('toast-success');
  $mdThemingProvider.theme('toast-info');
});
