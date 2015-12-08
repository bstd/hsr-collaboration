'use strict';

describe('Startseite', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });


  it('should have title "Startseite"', function() {
    expect(browser.getTitle()).toEqual('Startseite');
  });

  it('should have headerSearch', function() {
    expect(page.headerSearch.isPresent()).toBe(true);
  });


/*
  // __
  it('should __', function() {
  });
*/
});
