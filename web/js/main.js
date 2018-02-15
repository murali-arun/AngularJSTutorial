function myfunction(){
    alert("ARUN")
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.fName= "John";
    $scope.lName= "Doe";
    $scope.RName="Arun";
});

app.controller('myCtrl2', function($scope) {
    $scope.RName="Arun 2";
    $scope.myCol="red";
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