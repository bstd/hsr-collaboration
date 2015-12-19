'use strict';

var BasketPage = function() {
  this.basketParagraph = element.all(by.css('md-content.layout-wrap')).first().element(by.tagName('p'));
  this.linkToStart = element.all(by.css('md-content.layout-wrap')).first().element(by.css('a.md-primary'));
};

module.exports = new BasketPage();
