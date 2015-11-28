'use strict';

var _ = require('lodash');
var Product = require('./product.model');

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
		if (err) { return handleError(res, err); }

		return res.status(201).json(product);
	});
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
var userPicture = function(req,res){             // Stores Picture for a user matching the ID.
  user.findById(req.param('id'), function (err, user) {
    console.log(req.files) // File from Client
    if(req.files.file){   // If the Image exists
      var fs = require('node-fs');
      fs.readFile(req.files.file.path, function (dataErr, data) {
        if(data) {
          user.photo ='';
          user.photo = data;  // Assigns the image to the path.
          user.save(function (saveerr, saveuser) {
            if (saveerr) {
              throw saveerr;
            }
            res.json(HttpStatus.OK, saveuser);
          });
        }
      });
      return
    }
    res.json(HttpStatus.BAD_REQUEST,{error:"Error in file upload"});
  });
};

function handleError(res, err) {
	return res.status(500).send(err);
}
