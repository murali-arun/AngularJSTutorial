/*
* It is used to store the latest score at any moment .*/
app.factory('TotalScore', function () {

    var totalScoreFactory = {};
    var tScore = 0;
    totalScoreFactory.setTotalScore = function (value) {
        tScore = value;
    };
    totalScoreFactory.getTotalScore = function () {
        return tScore;
    };

    return totalScoreFactory;

});