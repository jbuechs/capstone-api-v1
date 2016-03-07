/* jshint esnext:true */
var pry = require('pryjs');

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
router.get('/:id', lookupAdie, function(req, res) {
	res.json(req.data);
});

// POST to adies/ path
router.post('/', function(req, res) { });

// PATCH to adies/:id path
router.patch('/:id', lookupAdie, function(req, res){

});

// DELETE to adies/:id path
router.delete('/:id', lookupAdie, function(req, res){
	// eval(pry.it);
	db.adie.destroy({
		where: { id : req.params.id }
	})
	.then(function() {
		return res.json({ message: ['Adie successfully deleted']});
	})
	.catch(function() {
		console.error(err);
		res.statusCode = 500;
		return res.json({ errors: ['Could not delete adie'] });
	});
});

// Lookup Adie by id
function lookupAdie(req, res, next) {
	db.adie.findById(req.params.id)
		.then(function(adie) {
			if (adie === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Adie not found']});
			}
			req.data = adie;
			next();
		})
		// need to write a mock that tests this
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Could not retrieve adie'] });
		});
}

module.exports = router;
