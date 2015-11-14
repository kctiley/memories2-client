var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider,$locationProvider){
   $routeProvider
    .when('/api/v1/memories', {
      templateUrl: 'index.html',
      controller: 'HomeController'
    })
  $locationProvider.html5Mode(true);
})

