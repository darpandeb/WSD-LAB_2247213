var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://darpandeb.github.io/WSD-LAB_2247213/data.json")
    .then(function(response) {
            $scope.jsondata = response.data.data;
        });
});