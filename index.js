
//alert("hi");
var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'/pages/home.html',
	})
	.when('/movies',{
		templateUrl:'/pages/movies.html',
	})
	.when('/offers',{
		templateUrl:'/pages/offers.html',
	})
	.when('/signin',{
		templateUrl:'/pages/signup.html'
	})
	.when('/login',{
		templateUrl:'/pages/login.html',
	});
});
