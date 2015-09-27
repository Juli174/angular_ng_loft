;(function(){
	'use strict';

	angular
		.module('Loft', [
			'ngRoute',
			'Loft.User',
			'Loft.Users'
		])
		.config(Config)
		.controller('MainCtrl', ['$scope', MainController]);

	function MainController($scope){
		var mc = this;
		$scope.hello = "Привет, мир!";
		mc.hello = "Это controllerAs";
	};

	function Config($routeProvider){
		$routeProvider
		.when('/user', {
			templateUrl: 'app/user/user.html',
			controller: 'UserCtrl',
			controllerAs: 'uc'
		})
		.otherwise({redirectTo: '/'});
	}


})();
;(function(){
	'use strict';

	angular
		.module('Loft.User', [])
		.config(UserConfig)
		.controller('UserCtrl', UserController);

	function UserController(){
		this.hello = "User";
	}

	function UserConfig($routeProvider){
		$routeProvider
		.when('/user', {
			templateUrl: 'app/user/user.html',
			controller: 'UserCtrl',
			controllerAs: 'uc'
		});
	}
})();
;(function(){
	'use strict';

	angular
		.module('Loft.Users', [])
		.config(UsersConfig)
		.controller('UsersCtrl', UsersController);

	function UsersController(){
		this.hello = "Users";
		this.usersList = [];
	}

	function UsersConfig($routeProvider){
		$routeProvider
		.when('/users', {
			templateUrl: 'app/users/users.html',
			controller: 'UsersCtrl',
			controllerAs: 'usc'
		});
	}
})();