'use strict';

describe('Basket', function() {
  var page,
      basketUrl = '/basket';

  beforeEach(function() {
    browser.get(basketUrl);
    page = require('./basket.po');
  });

  it('should have title "Warenkorb" and show "Warenkorb ist leer."', function() {
    expect(browser.getTitle()).toEqual('Warenkorb');
    expect(page.basketParagraph.isPresent()).toBe(true);
    var t1 = page.basketParagraph.getText().then(function(txt) {
      expect(txt).toEqual('Warenkorb ist leer.');
    });

    expect(page.linkToStart.isPresent()).toBe(true);
    var t2 = page.linkToStart.getText().then(function(txt) {
      expect(txt.toLowerCase()).toEqual('zur startseite');
    });
  });
});
