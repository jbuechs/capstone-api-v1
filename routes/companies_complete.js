/* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');
// var pry = require('pryjs');

// TODO: See if I can dry the dotenv and jwt code up
var dotenv = require('dotenv');
var jwt = require('express-jwt');
dotenv.load();
var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID,
});

// GET companies_employees/:id path
router.get('/:id([0-9]+)', function(req, res) {
	jwtCheck(req, res, function() {
		// check for authentication through req.user
		db.company.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt'] }})
		.then(function(company) {
			if (company === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Company not found']});
			}
			var response = { data : {
				company: company
			}};
			db.sequelize.query('SELECT id,name,cohort FROM adies WHERE "companyId" = ?', {replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT})
				.then(function(adies) {
					response.data.adies = adies;
				})
				.then(() => {
					if (req.user) {
						// user is authenticated, so search for employees
						db.sequelize.query('SELECT * FROM employees WHERE "companyId" = ?', { replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT})
						  .then(function(employees) {
						    response.data.employees = employees;
						    return res.json(response);
						  });
					} else {
						// user is not authenticated, so no employees & just return the company
						return res.json(response);
					}
				});
		})
		// need to write a mock that tests this
		.catch(function(err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Could not retrieve company'] });
		});
	});
	
});

module.exports = router;
