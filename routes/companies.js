/* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');

// GET companies path
router.get('/', function(req, res) {
	db.company.findAll()
		.then(companies => res.send({data:companies}));
		// add catch for errors?
});

// GET companies/:id path
router.get('/:id([0-9]+)', lookupCompany, function(req, res) {
	res.json({ data: req.data });
});

// POST to companies/ path
router.post('/', adminCheck, function(req, res) { 
	db.company
		.create(
		{
			name: req.body.name,
			street: req.body.street,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			website: req.body.website,
			logo: req.body.logo,
		}, 
		{ fields: ['name', 'street', 'city', 'state', 'zip', 'website', 'logo']})
		.then(function(company){
			return res.json(
				{ messages: ['Company created!'],
					data: company.get({ plain: true, })
				});
		})
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
      return res.json({ 
      	messages: ['Failed to create company'],
      	errors: err.errors });
		});
});

// PATCH to companies/:id path
router.patch('/:id([0-9]+)', adminCheck, lookupCompany, function(req, res){
	req.data.update({
		name: req.body.name,
		street: req.body.street,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip,
		website: req.body.website,
		logo: req.body.logo,
	}, 
	{ fields: ['name', 'street', 'city', 'state', 'zip', 'website', 'logo']})
	.then(function(updatedCompany){
		return res.json(
		{ messages: ['Company updated!'],
			data: updatedCompany.get({ plain: true, })
		});
	})
	.catch(function(err){
		console.error(err);
		res.statusCode = 500;
		return res.json({ 
			messages: ['Failed to update company'],
			errors: err.errors });
	});
});

// DELETE to companies/:id path
router.delete('/:id([0-9]+)', adminCheck, lookupCompany, function(req, res){
	db.company.destroy({
		where: { id : req.params.id }
	})
	.then(function() {
		return res.json({ messages: ['Company successfully deleted']});
	})
	.catch(function() {
		console.error(err);
		res.statusCode = 500;
		return res.json({ errors: ['Could not delete company'] });
	});
});

// Lookup company by id
function lookupCompany(req, res, next) {
	db.company.findById(req.params.id)
		.then(function(company) {
			if (company === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Company not found']});
			}
			req.data = company;
			next();
		})
		// need to write a mock that tests this
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Could not retrieve company'] });
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

module.exports = router;
