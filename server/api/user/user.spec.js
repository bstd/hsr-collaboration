'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var server = request.agent('http://localhost:9000');
var User = require('./user.model');


describe('requesting routes', function() {
  beforeEach(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  after(function(done) {
    // Clear users after testing
    User.remove().exec().then(function() {
      done();
    });
  });

  // TODO use sequence as in index
  /*
  get('/', auth.hasRole('admin')
  delete('/:id', auth.hasRole('admin')
  get('/me', auth.isAuthenticated()
  put('/:id/password', auth.isAuthenticated()
  get('/:id', auth.hasRole('admin')
  post('/'
  */


  it('GET /api/users should return 401 because restricted', function(done) {
    request(app)
    .get('/api/users')
    .expect(401)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });

  it('GET /api/users/:id should return 401 because restricted', function(done) {
    request(app)
    .get('/api/users/123')
    .expect(401)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });

  it('POST empty /api/users should return 422', function(done) {
    request(app)
    .post('/api/users')
    .expect(422)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });

  it('POST {email: a@b.c, password: 123} /api/users should return 200', function(done) {
    request(app)
    .post('/api/users')
    .send({ email: 'a@b.c', password: '123'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});
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
