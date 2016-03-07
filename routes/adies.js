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
router.post('/', function(req, res) { 
	// TODO: Validate incoming data
	db.adie
		.create(
		{
			name: req.body.name,
			cohort: req.body.cohort,
			github_username: req.body.github_username,
			twitter: req.body.twitter,
			linked_in_url: req.body.linked_in_url,
			image: req.body.image,
			email: req.body.email,
			bio: req.body.bio,
		}, 
		{ fields: ['name', 'cohort', 'github_username', 'twitter', 'linked_in_url', 'image', 'email', 'bio']})
		.then(function(adie){
			// return adie info like a GET
			adie.get({
				plain: true,
			});
		})
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
      return res.json({
        errors: ['Failed to create Adie']
      });
		});
});

// PATCH to adies/:id path
router.patch('/:id', lookupAdie, function(req, res){

});

// DELETE to adies/:id path
router.delete('/:id', lookupAdie, function(req, res){
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
