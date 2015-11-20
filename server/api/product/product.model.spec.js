'use strict';

var util = require('../../test.util');

var product = new util.Product({
  ean: '1234567890123',
  name: 'Fake Product',
  info: 'info whatever',
  active: true
});


describe('Product Model', function() {
  before(function(done) {
    util.removeProduct(done);
  });

  afterEach(function(done) {
    util.removeProduct(done);
  });


  it('should begin with no products', function(done) {
    util.Product.find({}, function(err, products) {
      products.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate product', function(done) {
    product.save(function() {
      var productDup = new util.Product(product);
      productDup.save(function(err) {
        util.should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an EAN', function(done) {
    product.ean = '';
    product.save(function(err) {
      util.should.exist(err);
      done();
    });
  });

  it('should fail when saving without a name', function(done) {
    product.name = '';
    product.save(function(err) {
      util.should.exist(err);
      done();
    });
  });
});
