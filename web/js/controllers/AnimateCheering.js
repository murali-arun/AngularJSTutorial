/*
* It is used to return true whenever the score is multiple of 10.
* It will be used to generate a animated pop up saying "HOORAY!!!" (To be done later.)*/
app.controller('animateCheering', function ($scope, TotalScore, $interval) {
    $scope.totalscore = 0;
    $interval(function () {
        if (TotalScore.getTotalScore() % 5 == 0) {
            $scope.totalscore = true;
        }
        else {
            $scope.totalscore = false;
        }
    }, 100);

});

