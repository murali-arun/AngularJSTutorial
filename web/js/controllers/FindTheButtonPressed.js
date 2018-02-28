/*It is used to find the button pressed by the user
*/
app.controller('FindTheButtonPressed', function ($scope, userInputModel, $log, $http, randomNumberModel) {
    $scope.onKeyPressResult = "";
    $scope.randomNum = 0;
    $scope.UserPressed = function (userEntered) {
        userInputModel.setuserInputModelFactory(userEntered,false);
        $scope.onKeyPressResult = userInputModel.getuserInputModelFactory();
        $scope.userInput = "";
    }
});
