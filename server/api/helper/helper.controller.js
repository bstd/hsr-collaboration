/**
 * GET      /checkUnique/:id          ->  checkUnique
 *
 * example: /checkUnique/user?property=email&value=a@b.c
 */

'use strict';

var User = require('../../services/users');


// Get single user by email to check for already existing email among users
exports.checkUnique = function(req, res) {
//console.log('server api - checkUnique');
/*console.log('req.params.id=', req.params.id);
console.log('req.query.property=', req.query.property);
console.log('req.query.value=', req.query.value);*/
	// TODO: sanitize!!!
	var id = req.params.id,
		property = req.query.property,
		value = req.query.value;
/*console.log('id=',id);
console.log('property=',property);
console.log('value=',value);*/

	if (typeof property !== 'undefined' && typeof value !== 'undefined') {
		User.findByEmail(value, function(err, user) {
			if (err) { return handleError(res, err); }

			if (!user) { return res.status(200).json({ duplicate: false }); }

			return res.status(200).json({ duplicate: true });
		});
	}
	else {
		return res.status(404).send('Not allowed');
	}
};

function handleError(res, err) {
	return res.status(500).send(err);
}
