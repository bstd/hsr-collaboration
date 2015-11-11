'use strict';

/**
 * GET     /users              ->  index
 * POST    /users              ->  create
 * GET     /users/me           ->  me (special route for local auth (passport)
 * GET     /users/:id          ->  show
 * PUT     /users/:id          ->  update
 * DELETE  /users/:id          ->  destroy
 */

// TODO sanitize!!

var _ = require('lodash'),
	User = require('../../services/users');


// Get list of users
exports.index = function(req, res) {
	User.find(function(err, users) {
		if (err) { return handleError(res, err); }

		return res.status(200).json(users);
	});
};

// Get my info
exports.me = function(req, res, next) {
	User.findById(req.user._id, function(err, user) {// security issue: pw leaked here
		if (err) { return next(err); }
		if (!user) { return res.json(401); }
		res.json(user);
	});
};

// Get a single user
exports.show = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if (err) { return handleError(res, err); }

		if (!user) { return res.status(404).send('Not Found'); }

		return res.json(user);
	});
};

// Creates a new user in the DB.
exports.create = function(req, res) {
	User.create(req.body, function(err, user) {
		if (err) { return handleError(res, err); }

		return res.status(201).json(user);
	});
};

// Updates an existing user in the DB.
exports.update = function(req, res) {
	if (req.body._id) { delete req.body._id; }

	User.findById(req.params.id, function(err, user) {
		if (err) { return handleError(res, err); }

		if (!user) { return res.status(404).send('Not Found'); }

		var updated = _.merge(user, req.body);
		User.update(req.params.id, updated, function(err) {
			if (err) { return handleError(res, err); }

			return res.status(200).json(user);
		});
	});
};

// Deletes a user from the DB.
exports.destroy = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if (err) { return handleError(res, err); }

		if (!user) { return res.status(404).send('Not Found'); }

		User.remove(req.params.id, function(err) {
			if(err) { return handleError(res, err); }

			return res.status(204).send('No Content');
		});
	});
};

function handleError(res, err) {
	return res.status(500).send(err);
}
