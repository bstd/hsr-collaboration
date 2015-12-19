'use strict';

// CONSTANTS
angular.module('components.constants', [])
.constant('CONSTANTS', {
  icons: {
    account_box: '/assets/svg/ic_account_box_24px.svg',
    add_shopping_cart: '/assets/svg/ic_add_shopping_cart_24px.svg',
    add_photo: '/assets/svg/ic_add_a_photo_24px.svg',
    arrow_back: '/assets/svg/ic_arrow_back_24px.svg',
    arrow_forward: '/assets/svg/ic_arrow_forward_24px.svg',
    assignment: '/assets/svg/ic_assignment_24px.svg',
    assignment_ind: '/assets/svg/ic_assignment_ind_24px.svg',
    attach_money: '/assets/svg/ic_attach_money_24px.svg',
    check_box: '/assets/svg/ic_check_box_24px.svg',
    check_box_outline_blank: '/assets/svg/ic_check_box_outline_blank_24px.svg',
    chevron_left: '/assets/svg/ic_chevron_left_24px.svg',
    chevron_right: '/assets/svg/ic_chevron_right_24px.svg',
    close: '/assets/svg/ic_close_24px.svg',
    delete: '/assets/svg/ic_delete_24px.svg',
    event_note: '/assets/svg/ic_event_note_24px.svg',
    expand_less: '/assets/svg/ic_expand_less_24px.svg',
    expand_more: '/assets/svg/ic_expand_more_24px.svg',
    indeterminate_check_box: '/assets/svg/ic_indeterminate_check_box_24px.svg',
    list: '/assets/svg/ic_list_24px.svg',
    menu: '/assets/svg/ic_menu_24px.svg',
    move_to_inbox: '/assets/svg/ic_move_to_inbox_24px.svg',
    people: '/assets/svg/ic_people_24px.svg',
    person: '/assets/svg/ic_person_24px.svg',
    plus: '/assets/svg/ic_plus_24px.svg',
    radio_button_checked: '/assets/svg/ic_radio_button_checked_24px.svg',
    radio_button_unchecked: '/assets/svg/ic_radio_button_unchecked_24px.svg',
    search: '/assets/svg/ic_search_24px.svg',
    shopping_cart: '/assets/svg/ic_shopping_cart_24px.svg',
    star: '/assets/svg/ic_star_24px.svg',
    star_border: '/assets/svg/ic_star_border_24px.svg',
    supervisor_account: '/assets/svg/ic_supervisor_account_24px.svg',
    today: '/assets/svg/ic_today_24px.svg'
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
.constant("STATES", [
      'Schweiz', 'Deutschland', 'Tschechien', 'Britannien', 'Irland', 'Belgien', 'Holland', 'Dänemark', 'USA', 'Kanada', 'Mexico'
	])
.constant("VANITIES", [
      'Lagerbier', 'Spezialbier', 'Dunkles Bier', 'Naturtrübes Bier', 'Alkoholfreies Bier', 'Altbier',
      'Pale Ale', 'Festbier (Bockbier)', 'Porter', 'Schwarzbier', 'Stout', 'Kohlenhydratarmes Bier', 'Leichtbier (alkoholarm)',
      'Mais-, Reisbier', 'Mehrkornbier', 'Starkbier', 'Holzfassgereifte Biere', 'Weizenbier (Weissbier)', 'Biermischgetränke'
    ])	 //vanities List
.config(function(CONSTANTS) {
  //console.log('constants:',CONSTANTS);
});
