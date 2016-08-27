angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    visits: visits++
  };
  $scope.visits = 0;
  $scope.title = 'test';
  $scope.url = 'http://www.test.com';
  $scope.baseUrl = 'http://localhost:8000';
  $scope.code = '!@#$%^';
  $scope.getAll = function() {
    Links.getAll()
    .then(function(respData) {
      $scope.data.links = respData;
    });

  };
  $scope.getAll();
});
