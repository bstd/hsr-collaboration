'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

// route restrictions based on passport auth and user role!
// TODO finalize
router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/me/orders', auth.isAuthenticated(), controller.getMyOrders);
router.put('/:id/address', auth.isAuthenticated(), controller.changeAddress);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.hasRole('admin'), controller.show);
router.post('/', controller.create);

module.exports = router;
