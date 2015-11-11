/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {
	// api
	app.use('/api/products', require('./api/product'));
	app.use('/api/users', require('./api/user'));
	app.use('/api/checkUnique', require('./api/helper'));

	// auth (passport)
	app.use('/auth', require('./components/auth'));


	// All undefined asset or api routes should return a 404
	app.route('/:url(api|auth|components|app|bower_components|assets)/*')
	.get(errors[404]);

	// All other routes should redirect to the index.html
	app.route('/*')
	.get(function(req, res) {
		res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
	});
};
