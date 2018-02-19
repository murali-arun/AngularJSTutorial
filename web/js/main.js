var app = angular.module('myApp', []);
app.controller('calculateKeyPressed', function ($scope, keyPressModel) {
    $scope.onKeyPressResult = "";
    $scope.onKeyPress = function ($event) {
        $scope.onKeyPressResult = $event.which;
        keyPressModel.setkeyPressModelFactory($scope.onKeyPressResult);
    }
});

app.factory('keyPressModel', function ($log) {

    var keypressed = 0;
    var factory = {};

    factory.setkeyPressModelFactory = function (value) {
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
        //$log.info("Setter method--->"+ keypressed);
    };

    factory.getkeyPressModelFactory = function () {

        return keypressed;
    };
    return factory;

});

app.factory('randomKeyModel', function ($log) {

    var random = 0;
    var randfactory = {};
    var keypressed = 0;

    randfactory.setrandomKeyModel = function (value) {

        keypressed=value;
    };

    randfactory.getrandomKeyModel = function () {
        return keypressed;
    };

    return randfactory;

});

app.service('RandomNumber', function ($log) {

    var i = 0;
    this.getRandomNumber = function () {
        i = 0;
        i = Math.floor(Math.random() * 6) + 1
        //$log.info(" I - - - > " + i);
        return i;
    }

});


app.controller('scoreBoard', function ($scope, randomKeyModel, keyPressModel, $log, $interval) {
    $scope.score = 0;
    var scoreCal =
        $interval(function () {
            //$log.info("rand" + randomKeyModel.getrandomKeyModel() );
           // $log.info("keypressed" + keyPressModel.getkeyPressModelFactory() );
            $log.info("score" + $scope.score );
            if (keyPressModel.getkeyPressModelFactory()!=null && randomKeyModel.getrandomKeyModel() == keyPressModel.getkeyPressModelFactory()) {
                $scope.score = $scope.score + 1;
            }
            keyPressModel.setkeyPressModelFactory(null);
        }, 200);

});


app.controller('RandomizeNumberInAll', function ($scope, $log, $interval, keyPressModel, RandomNumber , randomKeyModel) {

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
        }, 1000);


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

                    str = 'color-pink';
                    break;
                }
                if (num == 3) {

                    str = 'color-brown';
                    break;
                }
                if (num == 4) {

                    str = 'color-yellow';
                    break;
                }
                if (num == 5) {
                    str = 'color-blue';
                    break;
                }
                if (num == 6) {
                    str = 'color-brown';
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






