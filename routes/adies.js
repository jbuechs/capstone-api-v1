/* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');
var pry = require('pryjs');

// GET adies path
router.get('/', function(req, res) {
	jwtCheck(req, res, function() {
		var exclusions = req.user ? ['createdAt', 'updatedAt'] : ['email', 'createdAt', 'updatedAt', 'github_username'];
		db.adie.findAll({
			attributes: { exclude: exclusions }
				})
					.then(adies => res.send({data:adies}));
					// add catch for errors?
	});
});

// GET adies/:id path
router.get('/:id([0-9]+)', function(req, res) {
	jwtCheck(req, res, function() {
		var exclusions = req.user ? ['createdAt', 'updatedAt'] : ['email', 'createdAt', 'updatedAt', 'github_username'];
		db.adie.findById(req.params.id, { attributes: { exclude: exclusions }})
				.then(function(adie) {
					if (adie === null) {
						res.statusCode = 404;
		      	return res.json({ errors: ['Adie not found']});
					}
					return res.json({ data: adie });
				})
				// need to write a mock that tests this
				.catch(function(err) {
					console.error(err);
					res.statusCode = 500;
					return res.json({ errors: ['Could not retrieve adie'] });
				});
	});
});

// POST to adies/ path
router.post('/', adminCheck, function(req, res) { 
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
router.patch('/:id([0-9]+)', adminOrAdieCheck, lookupAdie, function(req, res){
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
router.delete('/:id([0-9]+)', adminCheck, lookupAdie, function(req, res){
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

// Check whether user is admin

var dotenv = require('dotenv');
var jwt = require('express-jwt');
dotenv.load();

var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID,
});

function adminCheck(req, res, next) {
	jwtCheck(req, res, function() {
		if (!req.user.admin) {
			res.statusCode = 401;
			return res.json({ errors: ['Admin authorization required to complete this action']});
		} else {
			next();
		}
	});
}

function adminOrAdieCheck(req, res, next) {
	jwtCheck(req, res, function() {
		// eval(pry.it);
		if (req.user && (req.user.admin || req.user.user_id === +req.params.id)) {
			next();
		} else {
			res.statusCode = 401;
			return res.json({ errors: ['You do not have permission to update this record.']});
		}
	});
}

module.exports = router;
