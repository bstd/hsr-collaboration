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
  // Just save the image's local URI after it was uploaded and saved by, in this case, Multer
  var newProduct = new Product(req.body);
  //Base64
  newProduct.image = req.file.filename; // (data:image/png;base64,...)
  //newProduct.thumbnail = req.files.thumbnail.path;
  //newProduct.brand = req.files.brand.path;
  newProduct.save(function(err, product) {
    if (err) return validationError(res, err);
  });
  res.send('ok');
  /*newProduct.create(req.body, function(err, product) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(product);
  });*/
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
      var filePath = "./public/" + product.image;
      console.log(filePath);
      fs.unlink(filePath, function (err) {
        if (err) throw err;
        console.log('successfully deleted:' +filePath);
      });

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
