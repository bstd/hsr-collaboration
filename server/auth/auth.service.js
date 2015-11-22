'use strict';

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../api/user/user.model');
var validateJwt = expressJwt({ secret: config.secrets.session });

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated() {
	return compose()
	// Validate jwt
	.use(function(req, res, next) {
//console.log('server auth auth.service - isAuthenticated');
		// allow access_token to be passed through query parameter as well
		if (req.query && req.query.hasOwnProperty('access_token')) {
			req.headers.authorization = 'Bearer ' + req.query.access_token;
		}
		validateJwt(req, res, next);
	})
	// Attach user to request
	.use(function(req, res, next) {
//console.log('server auth auth.service - isAuthenticated, use user:',req.user);
		User.findById(req.user._id, function(err, user) {
//console.log('server auth auth.service - isAuthenticated, find:',user);
			if (err) return next(err);
			if (!user) return res.status(401).send('Unauthorized');

			req.user = user;
			next();
		});
	});
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
function hasRole(roleRequired) {
//console.log('server auth auth.service - hasRole required:',roleRequired);
	if (!roleRequired) throw new Error('Required role needs to be set');

	return compose()
	.use(isAuthenticated())
	.use(function meetsRequirements(req, res, next) {
		if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
			next();
		}
		else {
			res.status(403).send('Forbidden');
		}
	});
}

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(id) {
//console.log('server auth - sign token:',id);
	return jwt.sign({ _id: id }, config.secrets.session, { expiresIn: 300 });// in seconds
}

/**
 * Set token cookie directly for oAuth strategies
 */
function setTokenCookie(req, res) {
//console.log('server auth - set token cookie');
	if (!req.user) return res.status(404).json({ message: 'Something went wrong, please try again.'});
	var token = signToken(req.user._id, req.user.role);
	res.cookie('token', JSON.stringify(token));
	res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;