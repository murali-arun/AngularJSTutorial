/*
* It is factory defined to store the user input. */

app.factory('userInputModel', function ($log) {

    var userInput = 0;
    var userInputFactory = {};

    userInputFactory.setuserInputModelFactory = function (value, condition) {
        if (condition == true) {
            if (value == 49) {
                userInput = 1;
            }
            else if (value == 50) {
                userInput = 2;
            }
            else if (value == 51) {
                userInput = 3;
            }
            else if (value == 52) {
                userInput = 4;
            }
            else if (value == 53) {
                userInput = 5;
            }
            else if (value == 54) {
                userInput = 6;
            }
            else {
                userInput = 0;
            }
        }
        else{
            userInput=value;
        }

    };

    userInputFactory.getuserInputModelFactory = function () {

        return userInput;
    };
    return userInputFactory;

});