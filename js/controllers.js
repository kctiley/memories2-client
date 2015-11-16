
app.controller('HomeController', [ '$scope', '$http', function($scope, $http ) {
  $scope.memories = [];
  // GET all  memories
  $http.get("http://g12-klint-tiley.cfapps.io/api/v1/memories").then(function(response){
    for (var i in response.data){
      $scope.memories.push(response.data[i]);
    }
  });

  // POST new memory
  $scope.submit = function(){
    var memoryObj = 
      {
        "data": {
          "type": "memory",
          "attributes": {
            "old_days": "string",
            "these_days": "string",
            "year": 0
          }
        }
      };
      console.log($scope);
    memoryObj.data.attributes.old_days = $scope.old_days;
    memoryObj.data.attributes.these_days = $scope.these_days;
    memoryObj.data.attributes.year = $scope.year;

    $scope.memories.push(memoryObj);

    $http.post('http://g12-klint-tiley.cfapps.io/api/v1/memories', memoryObj).then(function(response){
      },function(){
          console.log('Error in post')
    });
    $scope.memoryObj = {};
    // $scope.old_days ='';
    // $scope.these_days = '';
    // $scope.year = '';
  };

  // GET unique years list
  $scope.uniqueYears = []; 
  $http.get("http://g12-klint-tiley.cfapps.io/api/v1/memories/years").then(function(response){
    console.log(response);
    for (var i in response.data){
      $scope.uniqueYears.push(response.data[i]);
    }
  });

  //GET specific year
 $scope.uniqueYears = []; 
  $http.get("http://g12-klint-tiley.cfapps.io/api/v1/memories/years").then(function(response){
    console.log(response);
    for (var i in response.data){
      $scope.uniqueYears.push(response.data[i]);
    }
  });





}])
