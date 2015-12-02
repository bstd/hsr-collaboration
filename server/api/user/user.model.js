'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

// http://mongoosejs.com/docs/guide.html

var UserSchema = new Schema({
  email: { type: String, lowercase: true },
  role: { type: String, default: 'user' },
  provider: { type: String, default: 'local' },
  hashedPassword: String,
  salt: String,
  firstName: String,
  lastName: String,
  street: String,
  zip: Number,
  city: String
});


/**
 * Virtuals
 */
UserSchema
.virtual('password')
.set(function(password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashedPassword = this.encryptPassword(password);
})
.get(function() {
  return this._password;
});

// Admin profile information (unused)
UserSchema
.virtual('profile')
.get(function() {
  return {
    'email': this.email,
    'role': this.role
  };
});

// address only
UserSchema
.virtual('address')
.get(function() {
  return {
    'firstName': this.firstName,
    'lastName': this.lastName,
    'street': this.street,
    'zip': this.zip,
    'city': this.city
  }
});

// Non-sensitive info we'll be putting in the token
UserSchema
.virtual('token')
.get(function() {
  return {
    '_id': this._id,
    'role': this.role
  };
});


/**
 * Validations
 */

// Validate empty email
UserSchema
.path('email')
.validate(function(email) {
  return email.length;
}, 'Email cannot be blank');// TODO message

// Validate empty password
UserSchema
.path('hashedPassword')
.validate(function(hashedPassword) {
  return hashedPassword.length;
}, 'Password cannot be blank');// TODO message

// Validate email is not taken
UserSchema
.path('email')
.validate(function(value, respond) {
  var self = this;

  this.constructor.findOne({email: value}, function(err, user) {
    if (err) throw err;

    if (user) {
      if (self.id === user.id) return respond(true);
      return respond(false);
    }
    respond(true);
  });
}, 'The specified email address is already in use.');// TODO message

var validatePresenceOf = function(value) {
  return value && value.length;
};


/**
 * Pre-save hook
 */
UserSchema
.pre('save', function(next) {
  if (!this.isNew) return next();

  if (!validatePresenceOf(this.hashedPassword)) {
    next(new Error('Invalid password'));// TODO message
  }
  else {
    next();
  }
});


/**
 * Methods
 */
UserSchema.methods = {
  /**
  * Authenticate - check if the passwords are the same
  *
  * @param {String} plainText
  * @return {Boolean}
  * @api public
  */
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  /**
  * Make salt
  *
  * @return {String}
  * @api public
  */
  makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
  * Encrypt password
  *
  * @param {String} password
  * @return {String}
  * @api public
  */
  encryptPassword: function(password) {
    if (!password || !this.salt) return '';

    var salt = new Buffer(this.salt, 'base64');

    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }
};

module.exports = mongoose.model('User', UserSchema);
