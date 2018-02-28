
/*
* It is used to store the latest random variable generated from
* the RandomNumberServiceGenerator.*/

app.factory('randomNumberModel', function ($log) {

    var speed = 1000;
    var randomNumberFactory = {};
    var key = 1;

    randomNumberFactory.setrandomNumberModel = function (value) {

        key = value;
    };

    randomNumberFactory.getrandomNumberModel = function () {
        return key;
    };

    randomNumberFactory.setspeed = function (value) {
        if (value == 10)
            speed = 900;
        else
            speed = 1000;

    };

    randomNumberFactory.getspeed = function () {
        return speed;
    };

    return randomNumberFactory;

});