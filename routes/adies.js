/* jshint esnext:true */

var express = require('express');
var router = express.Router();
var db = require('../models');
// var pry = require('pryjs');

// GET adies path
router.get('/', function(req, res) {
	db.adie.findAll()
		.then(adies => res.send({data:adies}));
		// add catch for errors?
});

// GET adies/:id path
router.get('/:id', function(req, res) {
	db.adie.findById(req.params.id)
		.then(function(adie) {
			if (adie === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Adie not found']});
			}
			res.send({data:adie});
		})
		// need to write a mock that tests this
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Could not retrieve adie'] });
		});
});

module.exports = router;
