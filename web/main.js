

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $window) {
    $scope.fName= "John";
    $scope.lName= "Doe";
    $scope.RName="Arun";
    $scope.myfunction=function () {
        stausFlag=$window.open("https://www.facebook.com","_self");
    }

});

app.controller('myCtrl2', function($scope) {
    $scope.RName="Arun 2";
    $scope.myCol="blue";
    $scope.myName=function(){
        return $scope.RName='ARUN 3'
    }
});



app.controller('myArrayRepeat', function($scope) {
    $scope.myArray=[
        {name: 'ARUN 1 ', country: 'USA'},
        {name: 'ARUN 2 ', country: 'USA'},
        {name: 'ARUN 3 ', country: 'USA'},
        {name: 'ARUN 4 ', country: 'USA'}
    ];
});