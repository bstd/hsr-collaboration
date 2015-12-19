'use strict';

var MainPage = function() {
  this.headerSearch = element(by.model('$mdAutocompleteCtrl.scope.searchText'));
  this.productCtx = $('.brew__product');
  this.productCard = $('.brew__product .layout-wrap .flex-xs-100');
};

module.exports = new MainPage();
