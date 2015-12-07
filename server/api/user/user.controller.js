'use strict';

var _ = require('lodash');
var User = require('./user.model');
var Order = require('../order/order.model');// use as sub-collection resource (getMyOrders)
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.status(422).json(err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function(err, users) {
    if (err) return res.status(500).send(err);

    res.status(200).json(users);
  });
};

/**
 * Creates a new user
 */
exports.create = function(req, res, next) {
  var newUser = new User(req.body);

  newUser.save(function(err, user) {
    if (err) return validationError(res, err);

    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresIn: 1800 });// in seconds
    res.json({ token: token });
  });
};

/**
 * Get a single user
 */
exports.show = function(req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function(err, user) {
    if (err) return next(err);

    if (!user) return res.status(401).send('Unauthorized');

    res.json(user.profile);// virtual
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);

    return res.status(204).send('No Content');
  });
};

/**
 * Update an existing user's address
 */
exports.changeAddress = function(req, res) {
  if (req.body._id) { delete req.body._id; }

  User.findById(req.params.id, function(err, user) {
    if (err) { return handleError(res, err); }

    if (!user) { return res.status(404).send('Not Found'); }

    var updated = _.merge(user, req.body);

    updated.save(function(err) {
      if (err) { return handleError(res, err); }

      return res.status(200).json(user.address);// virtual
    });
  });
};


/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function(err, user) {
    if (user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);

        res.status(200).send('OK');
      });
    } else {
      res.status(403).send('Forbidden');
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;

  User.findOne({ _id: userId }, '-salt -hashedPassword', function(err, user) {// don't ever give out the password or salt
    if (err) return next(err);

    if (!user) return res.status(401).send('Unauthorized');

    res.json(user);
  });
};

/**
 * Get my orders (not using embed)
 */
exports.getMyOrders = function(req, res, next) {
  var userId = req.user._id;
//console.log('server api - user - getMyOrders - userID:',userId);
  User.findOne({ _id: userId }, 'email', function(err, user) {// select only email
    if (err) return next(err);
//console.log('server api - user - findOne - email:',user);
    if (!user) {
      return res.status(401).send('Unauthorized');
    }
    else {
      var _email = user.email;
//console.log('_email:',_email);
      Order.find({ userEmail: _email }, function(err, orders) {
        if (err) return next(err);
//console.log('server api - user - Order.find - _email, returns orders:',orders);
        res.json(orders);
      });
    }
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};


function handleError(res, err) {
  return res.status(500).send(err);
}
