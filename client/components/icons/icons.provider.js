'use strict';

// icon set configuration
angular.module('brewApp')
.config(function($mdIconProvider, CONSTANTS) {
  $mdIconProvider
  .icon('account_box', CONSTANTS.icons.account_box)
  .icon('add_shopping_cart', CONSTANTS.icons.add_shopping_cart)
  .icon('add_photo', CONSTANTS.icons.add_photo)
  .icon('arrow_back', CONSTANTS.icons.arrow_back)
  .icon('arrow_forward', CONSTANTS.icons.arrow_forward)
  .icon('assignment', CONSTANTS.icons.assignment)
  .icon('assignment_ind', CONSTANTS.icons.assignment_ind)
  .icon('attach_money', CONSTANTS.icons.attach_money)
  .icon('check_box', CONSTANTS.icons.check_box)
  .icon('check_box_outline_blank', CONSTANTS.icons.check_box_outline_blank)
  .icon('chevron_left', CONSTANTS.icons.chevron_left)
  .icon('chevron_right', CONSTANTS.icons.chevron_right)
  .icon('close', CONSTANTS.icons.close)
  .icon('delete', CONSTANTS.icons.delete)
  .icon('event_note', CONSTANTS.icons.event_note)
  .icon('expand_less', CONSTANTS.icons.expand_less)
  .icon('expand_more', CONSTANTS.icons.expand_more)
  .icon('indeterminate_check_box', CONSTANTS.icons.indeterminate_check_box)
  .icon('list', CONSTANTS.icons.list)
  .icon('menu', CONSTANTS.icons.menu)
  .icon('move_to_inbox', CONSTANTS.icons.move_to_inbox)
  .icon('people', CONSTANTS.icons.people)
  .icon('person', CONSTANTS.icons.person)
  .icon('plus', CONSTANTS.icons.plus)
  .icon('radio_button_checked', CONSTANTS.icons.radio_button_checked)
  .icon('radio_button_unchecked', CONSTANTS.icons.radio_button_unchecked)
  .icon('search', CONSTANTS.icons.search)
  .icon('shopping_cart', CONSTANTS.icons.shopping_cart)
  .icon('star', CONSTANTS.icons.star)
  .icon('star_border', CONSTANTS.icons.star_border)
  .icon('supervisor_account', CONSTANTS.icons.supervisor_account)
  .icon('today', CONSTANTS.icons.today);
})
.run(function($http, $templateCache, CONSTANTS) {
  // prefetch and cache icon urls using $templateCache
  var urls = CONSTANTS.icons;

  angular.forEach(urls, function(url) {
    $http.get(url, {cache: $templateCache});
  });
});
