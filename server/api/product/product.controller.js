'use strict';

var _ = require('lodash');
var Product = require('./product.model');

var fs = require('fs');

// Get list of products
exports.index = function(req, res) {
  Product.find(function(err, products) {
    if (err) { return handleError(res, err); }

    return res.status(200).json(products);
  });
};

// Get a single product
exports.show = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) { return handleError(res, err); }

    if (!product) { return res.status(404).send('Not Found'); }

    return res.json(product);
  });
};

// Creates a new product in the DB.
exports.create = function(req, res) {
  Product.create(req.body, function(err, product) {

    var dirname = require('path').dirname(__dirname);
    var filename = req.files.file.name;
    var path = req.files.file.path;
    var type = req.files.file.mimetype;

    var read_stream =  fs.createReadStream(dirname + '/' + path);

    var conn = req.conn;
    var Grid = require('gridfs-stream');
    Grid.mongo = mongoose.mongo;

    var gfs = Grid(conn.db);

    var writestream = gfs.createWriteStream({
      filename: filename
    });
    read_stream.pipe(writestream);

    if (err) { return handleError(res, err); }
    return res.status(201).json(product);
  });
  console.log(req.file);
  console.log(req.body);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  //res.redirect('/');
};

// Updates an existing product in the DB.
exports.update = function(req, res) {
  if (req.body._id) { delete req.body._id; }

  Product.findById(req.params.id, function(err, product) {
    if (err) { return handleError(res, err); }

    if (!product) { return res.status(404).send('Not Found'); }

    var updated = _.merge(product, req.body);

    updated.save(function(err) {
      if (err) { return handleError(res, err); }

      return res.status(200).json(product);
    });
  });
};

// Deletes a product from the DB.
exports.destroy = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) { return handleError(res, err); }

    if (!product) { return res.status(404).send('Not Found'); }

    product.remove(function(err) {
      if (err) { return handleError(res, err); }

      return res.status(204).send('No Content');
    });
  });
};

/* images */
// CREATE

function handleError(res, err) {
  return res.status(500).send(err);
}
