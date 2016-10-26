var app = angular.module("app", []);
app.controller("AppTest", function($scope, $http){
  /**
  * global vars
  **/
  app=this;
  $scope.pullRequests = "";


  /**
  * pull requests
  **/
  $http.get('https://raw.githubusercontent.com/frankcash/frankcash.github.io/master/static/pr.json').success(function(data) {
      $scope.pullRequests = data;
  });
});
