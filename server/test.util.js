'use strict';

/*
 * Helpers for tests
 */

var should = require('should');
var app = require('./app');
var User = require('./api/user/user.model');
var Product = require('./api/product/product.model');


// clear users
var removeUser = function(done) {
//console.log('TEST util removeUser');
  User.remove().exec().then(function() {
    done();
  });
};

// create users
var createUsers = function(done) {
//console.log('TEST util createUsers');
  removeUser();

  var user = new User({
    email: 'test@test.com',
    password: 'password'
  });

  var admin = new User({
    email: 'admin@admin.com',
    password: 'admin',
    role: 'admin'
  });

  // use model create, not controller (mongoose documents -> async)
  User.create(user, function(err, users) {
    if (err) return done(err);
//console.log('TEST util create user');

    User.create(admin, function(err, users) {
      if (err) return done(err);
//console.log('TEST util create admin');
      done();
    });
  });
};


// clear products
var removeProduct = function(done) {
//console.log('TEST util removeProduct');
  Product.remove().exec().then(function() {
    done();
  });
};


module.exports = {
  should: should,
  app: app,
  User: User,
  removeUser: removeUser,
  createUsers: createUsers,
  Product: Product,
  removeProduct: removeProduct
};
