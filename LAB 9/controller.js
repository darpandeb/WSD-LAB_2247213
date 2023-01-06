var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get("https://darpandeb.github.io/WSD-LAB_2247213/LAB%209/users.json")
    .then(function(response) {
            $scope.jsondata = response.data.data;
            console.log($scope.jsondata)
        });
});