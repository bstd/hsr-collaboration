'use strict';

var should = require('should');
var app = require('../../app');
var Product = require('./product.model');

var product = new Product({
  ean: '1234567890123',
  name: 'Fake Product',
  info: 'info whatever',
  active: true
});

describe('Product Model', function() {
  before(function(done) {
    // Clear products before testing
    Product.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Product.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no products', function(done) {
    Product.find({}, function(err, products) {
      products.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate product', function(done) {
    product.save(function() {
      var productDup = new Product(product);
      productDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an EAN', function(done) {
    product.ean = '';
    product.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without a name', function(done) {
    product.name = '';
    product.save(function(err) {
      should.exist(err);
      done();
    });
  });

});
