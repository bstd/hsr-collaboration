var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'// mongoose virtual
  },
  function(email, password, done) {
    User.findOne({
      email: email.toLowerCase()
    },
    function(err, user) {
      if (err) return done(err);

      if (!user) {
        return done(null, false, { message: 'Die Eingaben sind falsch.' });//This email is not registered
      }
      if (!user.authenticate(password)) {
        return done(null, false, { message: 'Die Eingaben sind falsch.' });//This password is not correct
      }
      return done(null, user);
    });
  }));
};
