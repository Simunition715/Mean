app.controller('UsersController', function(UserFactory, $location, $routeParams){
	console.log('instanciating users controller...');
	var self = this;
	self.newUser = {};
	self.registrationErrors = [];
	self.loginErrors = [];
	self.current_user = {};
	self.loginUser = {};

	//checks to see if user is in session
	UserFactory.session(function(res){
		if(res){
			self.current_user = res.data;
		}else {
			self.current_user = {};
			$location.url('/');
		}
	})

	//logout & return to /
	self.logout = function(){
		self.current_user = {};
	}

	//create user --register and redirect to dashboard
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
				self.current_user = res.data;
				$location.url('/dashboard')
			}
		})
	}

	//login user redirect to dashboard
	self.login = function(loginUser){
		UserFactory.login(loginUser, function(res){
		self.loginErrors = [];
			if(res.data.errors){
				self.loginUser = {email:"", password:""};
				self.loginErrors.push(res.data.errors);
			}else{
				self.current_user = res.data;
				$location.url('/dashboard')

			}
		})
	}	


})