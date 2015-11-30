'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// http://mongoosejs.com/docs/guide.html

var ProductSchema = new Schema({
  ean: String,
  active: Boolean,
  name: String,
  price: String,
  info: String,
  stock: Number,
  taste: String,
  vanity: String,
  country: String
});


/**
 * Virtuals
 */


/**
 * Validations
 */

// Validate empty ean
ProductSchema
.path('ean')
.validate(function(ean) {
  return ean.length;
}, 'EAN cannot be blank');// TODO message

// Validate empty name
ProductSchema
.path('name')
.validate(function(name) {
  return name.length;
}, 'Name cannot be blank');// TODO message

// Validate EAN is not taken
ProductSchema
.path('ean')
.validate(function(value, respond) {
  var self = this;

  this.constructor.findOne({ean: value}, function(err, product) {
    if (err) throw err;

    if (product) {
      if (self.id === product.id) return respond(true);
      return respond(false);
    }
    respond(true);
  });
}, 'The specified EAN is already in use.');// TODO message


/**
 * Methods
 */


module.exports = mongoose.model('Product', ProductSchema);
