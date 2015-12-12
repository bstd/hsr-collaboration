'use strict';

var _ = require('lodash');
var Product = require('./product.model');
var path = require('path');
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
  // Check for file and save
  try {
    if (req.file.filename) {
      newProduct.image = req.file.filename; // (data:image/png;base64,...)
      newProduct.save(function (err, product) {
        if (err) return validationError(res, err);
      });
      res.send('ok');
    }
  } catch(err) {
    newProduct.save(function (err, product) {
      if (err) return validationError(res, err);
    });
    res.send('ok')
  }

};

// Updates an existing product in the DB.
exports.update = function(req, res) {
  if (req.body._id) { delete req.body._id; }

  Product.findById(req.params.id, function(err, product) {
    if (err) { return handleError(res, err); }

    if (!product) { return res.status(404).send('Not Found'); }

    var updated = _.merge(product, req.body);
    // Check for file and save
    try {
      if (req.file.filename) {
        var rootPath = path.resolve(__dirname + '../../../uploads/');
        var filePath =  rootPath + '/' + product.image;
        console.log(filePath);
        fs.unlink(filePath, function (err) {
          if (err) throw err;
          console.log('old File successfully deleted:' + filePath);
        });
        updated.image = req.file.filename;
        updated.save(function (err) {
          if (err) {
            return handleError(res, err);
          }
          return res.status(200).json(product);
        });
      }
    }
    catch(err) {
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).json(product);
    });
    }
  });
};

// Deletes a product from the DB.
exports.destroy = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) { return handleError(res, err); }

    if (!product) { return res.status(404).send('Not Found'); }

    product.remove(function(err) {

      var rootPath = path.resolve(__dirname + '../../../uploads/');
      var filePath = rootPath + '/' + product.image;
      //console.log(fs.statSync(filePath).isFile());
      if(fs.statSync(filePath).isFile() === true) {
      fs.unlink(filePath, function (err) {
        if (err) throw err;
        console.log('successfully deleted:' + filePath);
      });
      }
      if (err) { return handleError(res, err); }

      return res.status(204).send('No Content');
    });
  });
};


function handleError(res, err) {
  return res.status(500).send(err);
}
