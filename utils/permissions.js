// var pry = require('pryjs');

var permissions = {
	authJwt: function(req, res, next) {
		var dotenv = require('dotenv');
		var jwt = require('express-jwt');
		dotenv.load();
		return jwt({
		  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
		  audience: process.env.AUTH0_CLIENT_ID,
		})(req, res, next);
	},

	adminCheck: function(req, res, next) {
		permissions.authJwt(req, res, function() {
			if (!req.user) {
				res.statusCode = 401;
				return res.json({ errors: ['Login required to complete this action']});
			}
			if (!req.user.admin) {
				res.statusCode = 401;
				return res.json({ errors: ['Admin authorization required to complete this action']});
			} else {
				next();
			}
		});
	},

	adminOrAdieCheck: function(req, res, next) {
		permissions.authJwt(req, res, function() {
			if (req.user && (req.user.admin || req.user.user_id === +req.params.id)) {
				next();
			} else {
				res.statusCode = 401;
				return res.json({ errors: ['You do not have permission to update this record.']});
			}
		});
	}
};

module.exports = permissions;

