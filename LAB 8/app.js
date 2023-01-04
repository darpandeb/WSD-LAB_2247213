
var app = angular.module('myApp', ['ngRoute']);
app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from Main Controller';
    });
app.config(function($routeProvider) {
    $routeProvider
     
    .when('/', {
    templateUrl : 'first.html',
    controller : 'FirstController'
    })
     
    .when('/records', {
    templateUrl : 'second.html',
    controller : 'SecondController'
    })
     
    .when('/table', {
    templateUrl : 'third.html',
    controller : 'ThirdController'
    })
     
//     .otherwise({redirectTo: '/'});
    
    });

app.controller('FirstController', function($scope) {
        $scope.message = 'Hello from FirstController';
        });
         
app.controller('SecondController', function($scope) {
        $scope.message = 'Hello from SecondController';
        });
         
app.controller('ThirdController', function($scope) {
        $scope.message = 'Hello from ThirdController';
        });

app.controller('myCtrl', function($scope, $http) {
    $http.get("https://darpandeb.github.io/WSD-LAB_2247213/data.json")
    .then(function(response) {
            $scope.jsondata = response.data.data;
        });
});
// jSON link : https://darpandeb.github.io/WSD-LAB_2247213/data.json//