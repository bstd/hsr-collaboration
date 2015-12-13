'use strict';

var _ = require('lodash');
var Order = require('./order.model');

// Get list of orders
exports.index = function(req, res) {
  Order.find(function(err, orders) {
//console.log('server api - order - index - Order.find:',orders);
    if (err) { return handleError(res, err); }

    return res.status(200).json(orders);
  });
};

// Get a single order
exports.show = function(req, res) {
  Order.findById(req.params.id, function(err, order) {
//console.log('server api - order - show - Order.findById:',req.params.id,order);
    if (err) { return handleError(res, err); }

    if (!order) { return res.status(404).send('Not Found'); }

    return res.json(order);
  });
};

// Creates a new order in the DB.
exports.create = function(req, res) {
//console.log('server api - order - create:',req.body);
  Order.create(req.body, function(err, order) {
//console.log('server api - order - create - Order.create:',order);
    if (err) { return handleError(res, err); }

    return res.status(201).json(order);
  });
};

// Updates an existing order in the DB.
exports.update = function(req, res) {
  if (req.body._id) { delete req.body._id; }

  Order.findById(req.params.id, function(err, order) {
//console.log('server api - order - update - Order.findById:',order);
    if (err) { return handleError(res, err); }

    if (!order) { return res.status(404).send('Not Found'); }

    var updated = _.merge(order, req.body);
//console.log('server api - order - updated - merged:',updated);
    updated.save(function(err) {
      if (err) { return handleError(res, err); }

      return res.status(200).json(order);
    });
  });
};

// Deletes a order from the DB.
exports.destroy = function(req, res) {
  Order.findById(req.params.id, function(err, order) {
//console.log('server api - order - destroy - Order.findById:',req.params.id,order);
    if (err) { return handleError(res, err); }

    if (!order) { return res.status(404).send('Not Found'); }

    order.remove(function(err) {
      if (err) { return handleError(res, err); }

      return res.status(204).send('No Content');
    });
  });
};


function handleError(res, err) {
  return res.status(500).send(err);
}
