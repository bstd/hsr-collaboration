'use strict';

// CONSTANTS
angular.module('components.constants', [])
.constant('CONSTANTS', {
  icons: {
    add_shopping_cart: '/assets/svg/ic_add_shopping_cart_24px.svg',
    arrow_back: '/assets/svg/ic_arrow_back_24px.svg',
    arrow_forward: '/assets/svg/ic_arrow_forward_24px.svg',
    check_box: '/assets/svg/ic_check_box_24px.svg',
    check_box_outline_blank: '/assets/svg/ic_check_box_outline_blank_24px.svg',
    chevron_left: '/assets/svg/ic_chevron_left_24px.svg',
    chevron_right: '/assets/svg/ic_chevron_right_24px.svg',
    close: '/assets/svg/ic_close_24px.svg',
    indeterminate_check_box: '/assets/svg/ic_indeterminate_check_box_24px.svg',
    menu: '/assets/svg/ic_menu_24px.svg',
    people: '/assets/svg/ic_people_24px.svg',
    person: '/assets/svg/ic_person_24px.svg',
    radio_button_checked: '/assets/svg/ic_radio_button_checked_24px.svg',
    radio_button_unchecked: '/assets/svg/ic_radio_button_unchecked_24px.svg',
    search: '/assets/svg/ic_search_24px.svg',
    shopping_cart: '/assets/svg/ic_shopping_cart_24px.svg',
    star: '/assets/svg/ic_star_24px.svg',
    star_border: '/assets/svg/ic_star_border_24px.svg',
    supervisor_account: '/assets/svg/ic_supervisor_account_24px.svg'
  },
  enums: {
    order: {
      new: {
        key: 'new',
        value: 'neu'
      },
      open: {
        key: 'open',
        value: 'Rechnung offen'
      },
      paid: {
        key: 'paid',
        value: 'bezahlt'
      },
      done: {
        key: 'done',
        value: 'abgeschlossen'
      }
    }
  }
})
.config(function(CONSTANTS) {
  //console.log('constants:',CONSTANTS);
});
