app.controller('UsersController', function(UserFactory, $location, $routeParams){
	console.log('instanciating users controller...');
	var self = this;
	self.registrationErrors = []

	UserFactory.session(function(res){
		if(res){
			self.current_user = res.data;
		}else {
			self.current_user = {};
			$location.url('/');
		}
	})

	//create user --register
	self.create = function(newUser){
		console.log(newUser);
		UserFactory.create(newUser, function(res){
			if(res.data.errors){
				console.log(res.data);
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.registrationErrors.push(error.message);	
				}
			}else {
				self.newUser = {};
				$location.url('/dasboard')
			}
		})
	}


})