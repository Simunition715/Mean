app.controller('UsersController', function(UserFactory, $location, $routeParams){
	console.log('instanciating users controller...');
	var self = this;
	self.newUser = {};
	self.registrationErrors = [];
	self.loginErrors = [];
	self.postErrors = [];
	self.current_user = {};
	self.loginUser = {};
	self.userIndex = [];
	self.posts = [];
	self.single = {};

	//checks to see if user is in session
	UserFactory.session(function(res){
		if(res){
			self.current_user = res.data;
		}else {
			self.current_user = {};
			self.loginUser = {};
			$location.url('/');
		}
	})

	//logout & return to /
	self.logout = function(){
		self.current_user = {};
		$location.url('/')
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
				console.log(self.current_user);
				$location.url('/dashboard')

			}
		})
	}

	//shows all members
	self.index = function(){
		UserFactory.index(function(res){
			if(res.data.errors){
				console.log(errors);
			}else{
				self.userIndex = res.data;
			}
		})
	}

	//create post
	self.createPost = function(newPost){
		newPost.author = UserFactory.current_user.first_name;
		UserFactory.createPost(newPost, function(res){
			if(res){
				console.log(res);
			}else{
				alert('Post created succesfully');
			}
		})
	}

	//index of posts
	self.indexPost = function(){
		UserFactory.indexPost(function(res){
			if(!res.data.errors){
				self.posts = res.data
			}else{
				console.log(res.data.errors);
			}
		})
	}

	//single post
	self.show = function(){
		UserFactory.show($routeParams.id, function(res){
			self.single = res.data;
		})
	}		


})