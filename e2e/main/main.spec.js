'use strict';

describe('Startseite', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });


  it('should have title "Startseite" and the following elements: headerSearch, product container, product element', function() {
    expect(browser.getTitle()).toEqual('Startseite');
    expect(page.headerSearch.isPresent()).toBe(true);
    expect(page.productCtx.isPresent()).toBe(true);
    expect(page.productCard.isPresent()).toBe(true);
  });

});
