'use strict';

var util = require('../../test.util');
var request = require('supertest');
var server = request.agent('http://localhost:9000');


describe('/api/users routes', function() {

  after(function(done) {
//console.log('TEST root describe after');
    util.removeUser(done);
  });


  /*
   * router.get('/', auth.hasRole('admin'), controller.index);
   */

  describe('GET /api/users', function() {

    // create user(s) that we can auth later
    before(function(done) {
      util.createUsers(done);
    });


    describe('without auth', function() {
      it('should return 401 without auth because restricted', function(done) {
        request(util.app)
        .get('/api/users')
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('with user auth', function() {
      var userToken;

      // auth user
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          userToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        userToken = '';
        done();
      });


      it('should return 403 with user auth because role is restricted to admin', function(done) {
        request(util.app)
        .get('/api/users')
        .set('authorization', 'Bearer ' + userToken)
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('with admin auth', function() {
      var adminToken;

      // auth admin
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'admin@admin.com',
          password: 'admin'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          adminToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        adminToken = '';
        done();
      });


      it('should return 200 with admin auth', function(done) {
        request(util.app)
        .get('/api/users')
        .set('authorization', 'Bearer ' + adminToken)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });
  });


  /*
   * router.delete('/:id', auth.hasRole('admin'), controller.destroy);
   */

  describe('DELETE /api/users/:id', function() {

     // create user(s) that we can auth later
    before(function(done) {
//console.log('TEST delete root before');
      util.createUsers(done);
    });


    describe('delete without auth', function() {
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });


      it('should return 401 without auth because restricted', function(done) {
        request(util.app)
        .delete('/api/users/' + id)
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });


    describe('delete with user auth', function() {
      var userToken;
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // auth user
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          userToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        userToken = '';
        id = '';
        done();
      });


      it('delete should return 403 with user auth because role is restricted to admin', function(done) {
        request(util.app)
        .delete('/api/users/' + id)
        .set('authorization', 'Bearer ' + userToken)
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('delete with admin auth', function() {
      var adminToken;
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // auth admin
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'admin@admin.com',
          password: 'admin'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          adminToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        adminToken = '';
        id = '';
        done();
      });


      it('delete should return 204 with admin auth', function(done) {
        request(util.app)
        .delete('/api/users/' + id)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(204)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });
  });


  /*
   * router.get('/me', auth.isAuthenticated(), controller.me);
   */

  describe('GET /api/users/me', function() {

    // create user(s) that we can auth later
    before(function(done) {
      util.createUsers(done);
    });


    describe('without auth', function() {
      it('should return 401 without auth because restricted', function(done) {
        request(util.app)
        .get('/api/users/me')
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('with user auth', function() {
      var userToken;

      // auth user
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          userToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        userToken = '';
        done();
      });


      it('should return 200 with user auth', function(done) {
        request(util.app)
        .get('/api/users/me')
        .set('authorization', 'Bearer ' + userToken)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });
  });


  /*
   * router.put('/:id/address', auth.isAuthenticated(), controller.changeAddress);
   */

  describe('PUT /api/users/:id/address', function() {

    // create user(s) that we can auth later
    before(function(done) {
      util.createUsers(done);
    });


    describe('without auth', function() {
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        id = '';
        done();
      });


      it('should return 401 without auth because restricted', function(done) {
        request(util.app)
        .put('/api/users/' + id + '/address')
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('with user auth', function() {
      var userToken;
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // auth user
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          userToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        userToken = '';
        id = '';
        done();
      });


      it('should return 200 and data as json with user auth and valid data', function(done) {
        request(util.app)
        .put('/api/users/' + id + '/address')
        .send({
          lastName: 'lastName',
          firstName: 'firstName',
          street: 'street',
          zip: 9000,
          city: 'city'
        })
        .set('authorization', 'Bearer ' + userToken)
        .expect(200, {
          lastName: 'lastName',
          firstName: 'firstName',
          street: 'street',
          zip: 9000,
          city: 'city'
        })
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });

      it('should return 403 with user auth but invalid user._id', function(done) {
        request(util.app)
        .put('/api/users/invaliduserid/password')
        .send({ lastName: 'lastName', firstName: 'firstName' })
        .set('authorization', 'Bearer ' + userToken)
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });
  });


  /*
   * router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
   */

  describe('PUT /api/users/:id/password', function() {

    // create user(s) that we can auth later
    before(function(done) {
      util.createUsers(done);
    });


    describe('without auth', function() {
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        id = '';
        done();
      });


      it('should return 401 without auth because restricted', function(done) {
        request(util.app)
        .put('/api/users/' + id + '/password')
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('with user auth', function() {
      var userToken;
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // auth user
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          userToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        userToken = '';
        id = '';
        done();
      });


      it('should return 200 with user auth and correct password', function(done) {
        request(util.app)
        .put('/api/users/' + id + '/password')
        .send({ oldPassword: 'password', newPassword: '123'})
        .set('authorization', 'Bearer ' + userToken)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });

      it('should return 403 with user auth and invalid password', function(done) {
        request(util.app)
        .put('/api/users/' + id + '/password')
        .send({ oldPassword: 'assword', newPassword: '123'})
        .set('authorization', 'Bearer ' + userToken)
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });
  });


  /*
   * router.get('/:id', auth.hasRole('admin'), controller.show);
   */

  describe('GET /api/users/:id', function() {

    // create user(s) that we can auth later
    before(function(done) {
      util.createUsers(done);
    });


    describe('without auth', function() {
      it('should return 401 without auth because restricted', function(done) {
        request(util.app)
        .get('/api/users/123')
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('with user auth', function() {
      var userToken;
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // auth user
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          userToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        userToken = '';
        id = '';
        done();
      });


      it('should return 403 with user auth because role is restricted to admin', function(done) {
        request(util.app)
        .get('/api/users/' + id)
        .set('authorization', 'Bearer ' + userToken)
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('with admin auth', function() {
      var adminToken;
      var id;

      // get valid user _id
      // TODO implement as helper (test.util)
      before(function(done) {
        util.User.findOne({ email: 'test@test.com' }, '-salt -hashedPassword', function(err, user) {
          if (err) return done(err);

          id = user._id;

          done();
        });
      });

      // auth admin
      before(function(done) {
        request(util.app)
        .post('/auth/local')
        .send({
          email: 'admin@admin.com',
          password: 'admin'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          adminToken = res.body.token;
          done();
        });
      });

      // clear variable(s)
      after(function(done) {
        adminToken = '';
        id = '';
        done();
      });


      it('should return 200 with admin auth', function(done) {
        request(util.app)
        .get('/api/users/' + id)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
      });
    });
  });


  /*
   * router.post('/', controller.create);
   */

  describe('POST /api/users', function() {
    it('should return 422 if empty', function(done) {
      request(util.app)
      .post('/api/users')
      .expect(422)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });

    it('should return 200 with valid data: {email: a@b.c, password: 123}', function(done) {
      request(util.app)
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
});
