'use strict';

// Test specific configuration
// ===========================
module.exports = {
  seedDB: false,// TODO match env, be aware of disabled for .spec
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/brew-test'
  }
};
