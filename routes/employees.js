/* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');
var permissions = require('../utils/permissions');

// GET employees path
router.get('/', function(req, res) {
	db.employee.findAll()
		.then(employees => res.send({data:employees}))
		.catch(function(err) {
				console.error(err);
				res.statusCode = 500;
	      return res.json({ 
	      	messages: ['Could not retreive employees'],
	      	errors: err.errors });
			});
});

// GET employees/:id path
router.get('/:id([0-9]+)', lookupEmployee, function(req, res) {
	res.json({ data: req.data });
});

// POST to employees/ path
router.post('/', permissions.adminCheck, function(req, res) { 
	db.employee
		.create({
			name: req.body.name,
			position: req.body.position,
			email: req.body.email,
			twitter: req.body.twitter,
			linked_in_url: req.body.linked_in_url,
			image: req.body.image,
		})
		.then(function(employee){
			return res.json(
				{ messages: ['Employee created!'],
					data: employee.get({ plain: true, })
				});
		})
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
      return res.json({ 
      	messages: ['Failed to create employee'],
      	errors: err.errors });
		});
});

// PATCH to employees/:id path
router.patch('/:id([0-9]+)', permissions.adminCheck, lookupEmployee, function(req, res){
	req.data.update({
		name: req.body.name,
		position: req.body.position,
		email: req.body.email,
		twitter: req.body.twitter,
		linked_in_url: req.body.linked_in_url,
		image: req.body.image,
	}, 
	{ fields: ['name', 'position', 'email', 'twitter', 'linked_in_url', 'image']})
	.then(function(updatedEmployee){
		return res.json(
		{ messages: ['Employee updated!'],
			data: updatedEmployee.get({ plain: true, })
		});
	})
	.catch(function(err){
		console.error(err);
		res.statusCode = 500;
		return res.json({ errors: err.errors });
	});
});

// DELETE to employees/:id path
router.delete('/:id([0-9]+)', permissions.adminCheck, lookupEmployee, function(req, res){
	db.employee.destroy({
		where: { id : req.params.id }
	})
	.then(function() {
		return res.json({ messages: ['Employee successfully deleted']});
	})
	.catch(function() {
		console.error(err);
		res.statusCode = 500;
		return res.json({ errors: ['Could not delete employee'] });
	});
});

// Lookup employee by id
function lookupEmployee(req, res, next) {
	db.employee.findById(req.params.id)
		.then(function(employee) {
			if (employee === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Employee not found']});
			}
			req.data = employee;
			next();
		})
		// need to write a mock that tests this
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Could not retrieve employee'] });
		});
}

module.exports = router;
