'use strict';

var express = require('express');
var controller = require('./helper.controller');
//var auth = require('../../components/auth/auth.service');

var router = express.Router();

//router.get('/:id', auth.isAuthenticated(), controller.checkUnique);
router.get('/:id', controller.checkUnique);


module.exports = router;
