'use strict';

var data = require('./db'),
	userData = data.users;


function User(email, password, role) {
	this.email = email;
	this.password = password;
	this.role = role || 'user';
	this.provider = 'local';// passport auth
}

exports.find = function(callback) {
	userData.find({}, function(err, all) {
		callback(err, all);
	});
};

exports.findById = function(id, callback) {
	userData.findOne({ _id: id }, function(err, user) {
		callback(err, user);
	});
};

exports.findByEmail = function(email, callback) {
	userData.findOne({ email: email }, function(err, user) {
		callback(err, user);
	});
};

exports.create = function(reqBody, callback) {
	var email = reqBody.email,
		password = reqBody.password,
		role = reqBody.role;

	var user = new User(email, password, role);

	userData.insert(user, function(err, newUser) {
		if (callback) {
			callback(err, newUser);
		}
	});
};

exports.update = function(id, reqBody, callback) {
	var email = reqBody.email,
		password = reqBody.password,
		role = reqBody.role;

	var user = new User(email, password, role);

	userData.update({ _id: id }, user, {}, function(err, countUpdated) {
		if (callback) {
			callback(err, countUpdated);
		}
	});
};

exports.remove = function(id, callback) {
	userData.remove({ _id: id }, {}, function(err, countRemoved) {
		if (callback) {
			callback(err, countRemoved);
		}
	});
};
