'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// http://mongoosejs.com/docs/guide.html

var OrderSchema = new Schema({
  orderId: {
    type: String,
    getter: function(val) { return this._id.toString(); },
    unique: true
  },
  dateCreated: {type: Date, default: Date.now, required: true },// alternative: .getTimestamp() -> method
  dateUpdated: { type: Date, default: Date.now },
  state: {
    type: String,
    trim: true,
    enum: ['new','open','paid','done'],
    default: 'new'
  },
  userEmail: { type: String, trim: true },
  addressLastName: { type: String, required: true },
  addressFirstName: { type: String, required: true },
  addressStreet: { type: String, required: true },
  addressZip: { type: String, required: true },
  addressCity: { type: String, required: true },
  total: Number,
  products: [{
    id: { type: Schema.Types.ObjectId, ref: 'Product' },
    _qty: { type: Number },
    _ean: { type: String },
    _name: { type: String },
    _price: { type: String }
  }]
});


/**
 * Virtuals
 */


/**
 * Validations
 */


/**
 * Pre-save hook
 */
OrderSchema
.pre('save', function(next) {
  // new entries: index new entries with orderId
  this.orderId = this._id.toString().replace(/\D/g,'');

  // modified entries: update dateUpdated
  this.dateUpdated = new Date();

  next();
});


/**
 * Methods
 */


module.exports = mongoose.model('Order', OrderSchema);
