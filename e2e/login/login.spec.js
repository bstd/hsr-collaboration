'use strict';

describe('Login', function() {
  var page,
      loginUrl = '/login',
      /*enter = browser.actions().sendKeys(protractor.Key.ENTER),
      user1 = 'test@test.com',
      pw1 = 'test',*/
      user2 = 'false@fail.com',
      pw2 = 'nope';

  beforeEach(function() {
    browser.get(loginUrl);
    page = require('./login.po');
  });

  it('should have title "Anmeldung", fields username and password ', function() {
    expect(browser.getTitle()).toEqual('Anmeldung');
    expect(page.userName.isPresent()).toBe(true);
    expect(page.pw.isPresent()).toBe(true);
  });

  it('should not accept false credentials', function() {
    page.userName.clear();
    page.userName.getAttribute('value').then(function(value) { expect(value).toBe(''); });

    page.userName.sendKeys(user2);
    page.userName.getAttribute('value').then(function(value) { expect(value).toBe(user2); });

    page.pw.clear();
    page.pw.getAttribute('value').then(function(value) { expect(value).toBe(''); });

    page.pw.sendKeys(pw2);
    page.pw.getAttribute('value').then(function(value) { expect(value).toBe(pw2); });

    expect(page.loginBtn.isPresent()).toBe(true);
    page.loginBtn.click().then(function() {
      expect(browser.getTitle()).toEqual('Anmeldung');
    });
  });
});
