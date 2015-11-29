'use strict';

// icon set configuration
angular.module('brewApp')
.config(function($mdIconProvider, CONSTANTS) {
  $mdIconProvider
  .icon('add_shopping_cart', CONSTANTS.icons.add_shopping_cart)
  .icon('arrow_back', CONSTANTS.icons.arrow_back)
  .icon('arrow_forward', CONSTANTS.icons.arrow_forward)
  .icon('check_box', CONSTANTS.icons.check_box)
  .icon('check_box_outline_blank', CONSTANTS.icons.check_box_outline_blank)
  .icon('chevron_left', CONSTANTS.icons.chevron_left)
  .icon('chevron_right', CONSTANTS.icons.chevron_right)
  .icon('close', CONSTANTS.icons.close)
  .icon('indeterminate_check_box', CONSTANTS.icons.indeterminate_check_box)
  .icon('menu', CONSTANTS.icons.menu)
  .icon('people', CONSTANTS.icons.people)
  .icon('person', CONSTANTS.icons.person)
  .icon('radio_button_checked', CONSTANTS.icons.radio_button_checked)
  .icon('radio_button_unchecked', CONSTANTS.icons.radio_button_unchecked)
  .icon('search', CONSTANTS.icons.search)
  .icon('shopping_cart', CONSTANTS.icons.shopping_cart)
  .icon('star', CONSTANTS.icons.star)
  .icon('star_border', CONSTANTS.icons.star_border)
  .icon('supervisor_account', CONSTANTS.icons.supervisor_account);
})
.run(function($http, $templateCache, CONSTANTS) {
  // prefetch and cache icon urls using $templateCache
  var urls = CONSTANTS.icons;

  angular.forEach(urls, function(url) {
    $http.get(url, {cache: $templateCache});
  });
});
