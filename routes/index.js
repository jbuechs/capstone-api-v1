var express = require('express');
var router = express.Router();
var pry = require('pryjs');
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	db.adie.findAll()
		.then(function(adies) {
			res.send({adies: adies});
		});
  // res.render('index', { title: "Jennie's Capstone API" });
});

module.exports = router;
