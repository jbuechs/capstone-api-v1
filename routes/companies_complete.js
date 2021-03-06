/* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');
var permissions = require('../utils/permissions');

// var pry = require('pryjs');

// GET companies_employees/:id path
router.get('/:id([0-9]+)', function(req, res) {
	permissions.authJwt(req, res, function() {
		db.company.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt'] }})
		.then(function(company) {
			if (company === null) {
				res.statusCode = 404;
      	return res.json({ errors: ['Company not found']});
			}
			var response = { data : {
				company: company
			}};
			db.sequelize.query('SELECT id,name,cohort,image FROM adies WHERE "companyId" = ?', {replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT})
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
