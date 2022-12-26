var app = angular.module("myApp", []);

app.controller("myCltr",($scope,$http)=>
{
    $http.get('http://localhost:3022/data')
    .success((res)=>{
       $scope.names=res.data;
    })
});