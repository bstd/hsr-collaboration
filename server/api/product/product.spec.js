'use strict';

var util = require('../../test.util');
var request = require('supertest');

describe('GET /api/products', function() {

  it('should respond with JSON array', function(done) {
    request(util.app)
    .get('/api/products')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      done();
    });
  });
});
