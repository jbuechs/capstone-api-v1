/* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');
// var jwt = require('express-jwt');

// var jwtCheck = jwt({
//   secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
//   audience: process.env.AUTH0_CLIENT_ID
// });

// GET adies path
router.get('/', function(req, res) {
	db.adie.findAll({
		attributes: { exclude: ['email', 'createdAt', 'updatedAt', 'github_username'] }
	})
		.then(adies => res.send({data:adies}));
		// add catch for errors?
});

// GET adies/:id path
router.get('/:id([0-9]+)', lookupAdie, function(req, res) {
	res.json(req.data);
});

// POST to adies/ path
router.post('/', function(req, res) { 
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
			return res.json(
				{ messages: ['Adie created!'],
					data: adie.get({ plain: true, })
				});
		})
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
      return res.json({ 
      	messages: ['Failed to create Adie'],
      	errors: err.errors });
		});
});

// PATCH to adies/:id path
router.patch('/:id([0-9]+)', lookupAdie, function(req, res){
	req.data.update({
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
	.then(function(updatedAdie){
		return res.json(
		{ messages: ['Adie updated!'],
			data: updatedAdie.get({ plain: true, })
		});
	})
	.catch(function(err){
		console.error(err);
		res.statusCode = 500;
		return res.json({ errors: err.errors });
	});
});

// DELETE to adies/:id path
router.delete('/:id([0-9]+)', lookupAdie, function(req, res){
	db.adie.destroy({
		where: { id : req.params.id }
	})
	.then(function() {
		return res.json({ messages: ['Adie successfully deleted']});
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
