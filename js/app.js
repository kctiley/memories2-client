var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider,$locationProvider){
   $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/:year', {
      templateUrl: 'partials/year.html',
      controller: 'YearController'
    })

  $locationProvider.html5Mode(true);
})

