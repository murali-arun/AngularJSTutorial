

var app = angular.module('myApp', []);
app.controller('calculateKeyPressed', function($scope,getKeyPressed,keyPressModel) {
    $scope.onKeyPressResult = "";
    $scope.onKeyPress = function($event)
    {
        $scope.onKeyPressResult=$event.which;
        $scope.
        getKeyPressed.setValue( $scope.onKeyPressResult);
        keyPressModel.setkeyPressModelFactory($scope.onKeyPressResult);
    }
});

app.controller('ShowFirst', function($scope,getKeyPressed) {
    $scope.getLatestvalue=function() {
        $scope.one=getKeyPressed.getValue();
    }
});


app.controller('ShowSecond', function($scope,keyPressModel){
    $scope.fact=keyPressModel.getkeyPressModelFactory();
    $scope.getLatestvalue=function() {
        $scope.second=keyPressModel.getkeyPressModelFactory();
    };

});


//this function gets the latest value but it does not update the variable on browser
//unless it is called.
app.service('getKeyPressed',function(){

   var x=0,setValue,getValue;

   var setValue=function(keyPress){
       x=keyPress;
   };

   var getValue = function(){
       return x;
   };
   return {setValue : setValue,
        getValue : getValue} ;

});

app.factory('keyPressModel',function(){

    var keypressed=0;
    var factory={};

    factory.setkeyPressModelFactory= function(value)
    {
        keypressed=value;
    };

    factory.getkeyPressModelFactory = function()
    {
        return keypressed;
    };
    return     factory;



});

