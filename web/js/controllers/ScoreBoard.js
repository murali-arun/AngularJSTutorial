/**
 * Created by armu0517 on 2/28/2018.
 */

/*It is responsible to evaluate user input . If user input matches with the color highlighted in the box, it will increase the score.
* Every time, score increases more than 10 points, the speed will increase by 50ms to increase difficulty.*/

app.controller('scoreBoard', function ($scope, randomNumberModel, userInputModel, $log, $interval, TotalScore) {
    $scope.score = 0;

    var speedControllerValue = 1;
    var speedMultiplier = 1;
    var scoreCalculator= $interval(function () {

        if (userInputModel.getuserInputModelFactory() != null && randomNumberModel.getrandomNumberModel() > 0 && randomNumberModel.getrandomNumberModel() == userInputModel.getuserInputModelFactory()) {
            $scope.score = $scope.score + 1;
            TotalScore.setTotalScore($scope.score);
            speedControllerValue = speedControllerValue + 1;
            if (speedControllerValue / 10 > speedMultiplier) {
                speedMultiplier = speedMultiplier + 1;
            }
            if (speedControllerValue == 1) {
                speedMultiplier = 1;
            }
        }
        else {
            speedControllerValue = speedControllerValue > 1 ? speedControllerValue - 1 : 1;
        }
        userInputModel.setuserInputModelFactory(0);
    }, 350 + speedMultiplier * 50);

});
