'use strict';

var should = require('should');
//var app = require('../../app');
var request = require('supertest');
var server = request.agent('http://localhost:9000');
/*
describe('authenticated as admin GET /api/users', function() {

  // login as admin
  it('login', loginAdmin());

  it('uri that requires admin to be logged in should respond with JSON array', function(done){
    //request(app)
    server
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  // login helper
  function loginAdmin() {
    return function(done) {
      server
        .post('/auth/local')
        .send({ email: 'admin@admin.com', password: 'admin' })
        .expect(200)
        .expect('Location', '/')
        .end(onResponse);

      function onResponse(err, res) {
          if (err) return done(err);
          return done();
      }
    };
  };
});
*/
