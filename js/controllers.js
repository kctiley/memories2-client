app.controller('HomeController', function($scope, $http) {
  $http.get("http://g12-klint-tiley.cfapps.io/api/v1/memories").then(function(result){
    
    $scope.memories = result.data;
  });
});  
