var Users = require('../controllers/user');

module.exports = function(app){
	app.get('/users',Users.index);
}