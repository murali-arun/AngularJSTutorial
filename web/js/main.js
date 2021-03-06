/* Copyright (C) 2017 Arun Murali - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the LICENSE_2017 license, which unfortunately won't be
 * written for another century.
 *
 * You should have received a copy of the LICENSE_2017  with
 * this file. If not, please write to: arun.murali@outlook.com  :
 */

//var app = angular.module('myApp', ['ngResource', 'ngAnimate']);
app.controller('calculateKeyPressed', function ($scope, keyPressModel, $log, $http, RandomNumberGenerate, randomKeyModel) {
    $scope.onKeyPressResult = "";
    $scope.randomNum = 0;
    $scope.onKeyPress = function ($event) {
        keyPressModel.setkeyPressModelFactory($event.which,true);
        $scope.onKeyPressResult = keyPressModel.getkeyPressModelFactory();
        $scope.userInput = "";
    }
});

app.controller('calculateButtonPressed', function ($scope, keyPressModel, $log, $http, RandomNumberGenerate, randomKeyModel) {
    $scope.onKeyPressResult = "";
    $scope.randomNum = 0;
    $scope.clickMe = function (userEntered) {
        keyPressModel.setkeyPressModelFactory(userEntered,false);
        $scope.onKeyPressResult = keyPressModel.getkeyPressModelFactory();
        $scope.userInput = "";
    }
});

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


app.factory('keyPressModel', function ($log) {

    var keypressed = 0;
    var factory = {};

    factory.setkeyPressModelFactory = function (value, condition) {
        if (condition == true) {
            if (value == 49) {
                keypressed = 1;
            }
            else if (value == 50) {
                keypressed = 2;
            }
            else if (value == 51) {
                keypressed = 3;
            }
            else if (value == 52) {
                keypressed = 4;
            }
            else if (value == 53) {
                keypressed = 5;
            }
            else if (value == 54) {
                keypressed = 6;
            }
            else {
                keypressed = 0;
            }
        }
        else{
            keypressed=value;
        }

    };

    factory.getkeyPressModelFactory = function () {

        return keypressed;
    };
    return factory;

});

app.factory('randomKeyModel', function ($log) {

    var speed = 1000;
    var randfactory = {};
    var key = 1;

    randfactory.setrandomKeyModel = function (value) {

        key = value;
    };

    randfactory.getrandomKeyModel = function () {
        return key;
    };

    randfactory.setspeed = function (value) {
        if (value == 10)
            speed = 900;
        else
            speed = 1000;

    };

    randfactory.getspeed = function () {
        return speed;
    };


    return randfactory;

});

app.factory('TotalScore', function () {

    var totalScoreFactory = {};
    var tscore = 0;
    totalScoreFactory.setTotalScore = function (value) {
        tscore = value;
    };
    totalScoreFactory.getTotalScore = function () {
        return tscore;
    };

    return totalScoreFactory;

});
app.service('RandomNumber', function ($http, $log) {

    var rN = 0;
    //this is called 2 second later..to be checked..
    this.getRandomNumber = function () {
        $http.get('/rest/random').then(function (response) {
            $log.info(response.data);
            rN = response.data;
        });
        return rN;
    };
    /*this.getRandomNumber = function () {
     i = 0;
     i = Math.floor(Math.random() * 6) + 1
     //$log.info(" I - - - > " + i);
     return i;
     }*/

});


app.controller('scoreBoard', function ($scope, randomKeyModel, keyPressModel, $log, $interval, TotalScore) {
    $scope.score = 0;
    var scoreCal = 0;
    var speedControllerValue = 1;
    var speedMultiplier = 1;
    $interval(function () {
        $log.info("rand" + randomKeyModel.getrandomKeyModel());
        $log.info("keypressed" + keyPressModel.getkeyPressModelFactory());
        $log.info("score" + $scope.score);
        if (keyPressModel.getkeyPressModelFactory() != null && randomKeyModel.getrandomKeyModel() > 0 && randomKeyModel.getrandomKeyModel() == keyPressModel.getkeyPressModelFactory()) {
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
        keyPressModel.setkeyPressModelFactory(0);
    }, 350 + speedMultiplier * 50);

});


app.controller('RandomizeNumberInAll', function ($scope, $log, $interval, keyPressModel, RandomNumber, randomKeyModel) {

    $scope.colorItem = [0, 0, 0, 0, 0, 0];
    var controllerRandom = this;
    var randomize =
        $interval(function () {
            var number = RandomNumber.getRandomNumber();
            randomKeyModel.setrandomKeyModel(number);
            $scope.colorItem = [0, 0, 0, 0, 0, 0];
            for (i = 0; i < 6; i++) {
                if (number == i + 1) {
                    $scope.colorItem[i] = number;
                }
                else {
                    $scope.colorItem[i] = 0;
                }
            }
            //$log.info("ENTERED" + $scope.colorItem);
        }, 700);

    $scope.whichClass = function (box) {
        var colorArray = [0, 0, 0, 0, 0, 0];
        colorArray = $scope.colorItem;
        var str = 'color-black';
        var num = 0;
        //$log.info("Color INITIAL--->BOX = "+box + " -  - -- - >STR = " + str +" - - - -> NUM "+ num +"COLOR ARRAY----->"+colorArray);

        for (num = 1; num <= 6; num++) {
            if (colorArray[num - 1] > 0 && box == num) {
                if (num == 1) {
                    str = 'color-red';
                    break;
                }
                if (num == 2) {

                    str = 'color-blue';
                    break;
                }
                if (num == 3) {

                    str = 'color-pink';
                    break;
                }
                if (num == 4) {

                    str = 'color-brown';
                    break;
                }
                if (num == 5) {
                    str = 'color-orange';
                    break;
                }
                if (num == 6) {
                    str = 'color-yellow';
                    break;
                }
                break;
            }
            else {
                str = 'color-black';
            }

        }
        //$log.info("Color FINAL--->BOX = "+box + " -  - -- - >STR = " + str +" - - - -> NUM "+ num +"COLOR ARRAY----->"+colorArray);
        return str;
    }

});

app.factory('RandomNumberGenerate', function ($resource) {

    return $resource('/rest/random', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false,
            transformResponse: function (data) {
                return {responseData: data.toString()}
            }

        }
    });
});







