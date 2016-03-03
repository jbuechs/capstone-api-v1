/* jshint esnext:true */

var express = require('express');
var router = express.Router();
var db = require('../models');
// var pry = require('pryjs');

// GET companies path
router.get('/', function(req, res) {
	db.company.findAll()
		.then(companies => res.send({data:companies}));
		// add catch for errors?
});

// GET companies/:id path
router.get('/:id', function(req, res) {
	db.company.findById(req.params.id)
		.then(function(company) {
			if (company === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Company not found']});
			}
			res.send({data:company});
		})
		// need to write a mock that tests this
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Could not retrieve company'] });
		});
});

module.exports = router;
