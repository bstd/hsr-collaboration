'use strict';

describe('Login', function() {
  var page;

  beforeEach(function() {
    browser.get('/login');
    page = require('./login.po');
  });


  it('should have title "Anmeldung"', function() {
    expect(browser.getTitle()).toEqual('Anmeldung');
  });

  it('should have user name field', function() {
    expect(page.userName.isPresent()).toBe(true);
  });


/*
  // __
  it('should __', function() {
  });
*/
});
