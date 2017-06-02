var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = {
	//query to find all posts
	index: function(req,res){
		Post.find({}).exec(function(err,doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},

	//creates post
	create: function(req,res){
		var post = new Post(req.body);
		post.save(function(err, post){
			if(err){
				console.log(err);
				return res.json(err);
			}else{
				return res.json(post);
			}
		})		
	},

	//find single post
	single: function(req, res){
		Question.findById(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},

}