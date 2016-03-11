// /* jshint esnext:true */
var express = require('express');
var router = express.Router();
var db = require('../models');
var dotenv = require('dotenv');
var expressJwt = require('express-jwt');  
dotenv.load();

var mySecret = new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64');

var requireAuth = expressJwt({secret: mySecret});

router.post('/', requireAuth, function(req, res, next) {
	// find the user id in the database and add it to the payload
	var github_username = req.user.nickname;
	db.adie.findAll({
		where: {github_username: req.user.nickname}, 
		attributes: ['id']})
		.then(function(adie){
			if(!adie[0]) { // github username not in database
				return res.status(401).send("Access Denied."); 
			} else {
				var id = adie[0].get('id');
				return res.status(200).send({ jwt: extendToken(mySecret, req.user, { user_id: id })});
			}
		});
		// .catch();
});

var jwt = require('jsonwebtoken');

function extendToken(secret, payload, extend) {
  //  Clone and extend the payload.
  var body = JSON.parse(JSON.stringify(payload));
  for (var prop in extend) {
    if (extend.hasOwnProperty(prop)) {
      body[prop] = extend[prop];
    }
  }
  //  Sign the new token with secret.
  return jwt.sign(JSON.stringify(body), secret);
}

module.exports = router;