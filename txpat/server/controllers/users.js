var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topics = mongoose.model('Topic');
var bcrypt = require('bcryptjs');

module.exports = {
	//query to find all users
	index: function(req,res){
		User.find({}).exec(function(err,doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},
	//creates user
	create: function(req,res){
		if(req.body.password != req.body.password_confirmation){
			return res.json({
				"errors":{
					"password":{
						"message":"Passwords do not match"
					}
				}
			})
		}
	}
	//login user


}