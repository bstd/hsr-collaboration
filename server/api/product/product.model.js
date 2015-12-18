'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// http://mongoosejs.com/docs/guide.html

var ProductSchema = new Schema({
  ean: String,
  active: Boolean,
  name: String,
  vol: String,
  price: String,
  info: String,
  stock: String,
  vanity: String,
  country: String,
  image: {
    type: String,
    default: ''
  },
  modificationDate: {type: Date, "default": Date.now}
});

/**
 * Validations
 */

// Validate empty ean
ProductSchema
.path('ean')
.validate(function(ean) {
  return ean.length;
}, 'EAN cannot be blank');

// Validate empty name
ProductSchema
.path('name')
.validate(function(name) {
  return name.length;
}, 'Name cannot be blank');

/**
 * Methods
 */


module.exports = mongoose.model('Product', ProductSchema);
