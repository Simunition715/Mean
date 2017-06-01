var mongoos = require('mongoose');
bar bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	fname: {
		type: String,
		minlength: 3,
		required: true
	},
	lname: {
		type: String,
		minlength: 3,
		required: true
	},
	email: {
		type: String,
		minlength: 5,
		required: true
	},
	password: {
		type: String,
		minlength: 5,
		required: true
	},
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}],
	comments: {
		type: Number,
		default: 0
	}
},{timestamps: true})

UserSchema.pre('save', function(done){
	this.password = bcrypt.hashSync(this.password,bcrypt.genSaltSync(8));
	done();
})

var User = mongoose.model('User',UserSchema);