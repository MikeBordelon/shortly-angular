angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.links = {
    url: '',
    word: /^http:\/\/*$/
  };
  $scope.addLink = function() {
    Links.addLink()
    .then(function(res) {
      // $location.path('/links');
    });
  };

});
