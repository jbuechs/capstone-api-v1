/* jshint esnext:true */

var express = require('express');
var router = express.Router();
var db = require('../models');
// var pry = require('pryjs');

// GET employees path
router.get('/', function(req, res) {
	db.employee.findAll()
		.then(employees => res.send({data:employees}));
		// add catch for errors?
});

// GET employees/:id path
router.get('/:id', function(req, res) {
	db.employee.findById(req.params.id)
		.then(function(employee) {
			if (employee === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Employee not found']});
			}
			res.send({data:employee});
		})
		// need to write a mock that tests this
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Could not retrieve employee'] });
		});
});

module.exports = router;
