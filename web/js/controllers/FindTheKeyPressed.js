/*
* It is required to find the user's input based on ng-keyPress
* event.*/

app.controller('findTheKeyPressed', function ($scope, userInputModel, $log, $http, randomNumberModel) {
    $scope.onKeyPressResult = "";
    $scope.randomNum = 0;
    $scope.onKeyPress = function ($event) {
        userInputModel.setuserInputModelFactory($event.which,true);
        $scope.onKeyPressResult = userInputModel.getuserInputModelFactory();
        $scope.userInput = "";
    }
});
