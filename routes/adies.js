var express = require('express');
var router = express.Router();
var db = require('../models');
var pry = require('pryjs');

// GET adies path
router.get('/adies', function(req, res, next) {
	eval(pry.it);
	db.adie.findAll()
		.then(function(adies) {
			res.send({adies: adies});
		});
});

module.exports = router;
