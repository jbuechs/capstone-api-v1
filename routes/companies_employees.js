/* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');
// var pry = require('pryjs');

// GET companies_employees/:id path
// Add authorization
router.get('/:id([0-9]+)', lookupCompany, function(req, res) {
	var response = { data : {
		company: req.data
	}};
	db.sequelize.query('SELECT * FROM employees WHERE "companyId" = ?', { replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT})
  .then(function(employees) {
    response.data.employees = employees;
    return res.json(response);
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

module.exports = router;
