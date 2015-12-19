'use strict';

var LoginPage = function() {
  this.userName = element(by.model('user.email'));
  this.pw = element(by.model('user.password'));
  this.loginBtn = element(by.css('button[type=submit].md-primary'));
};

module.exports = new LoginPage();
