/**
 * Created by armu0517 on 2/28/2018.
 */

/*This controller is responsible to animate the colors on the boxes. It ensures a random box is colored out of the six.
 * randomize() is a repeative function which will set value=true to one of the array elements of ColorFlagArray at specified interval . In this case, 700ms.
 * findTheClassToBeSet() is a function which returns the css class name based on the flag set in ColorFlagArrayarray , set by randomize() function ..*/

app.controller('RandomColorGenerator', function ($scope, $log, $interval, userInputModel, RandomNumberGeneratorByHttp, randomNumberModel) {

    $scope.colorFlagArray = [0, 0, 0, 0, 0, 0];

    var randomize =
        $interval(function () {
            var rnumber = RandomNumberGeneratorByHttp.getRandomNumber();
            randomNumberModel.setrandomNumberModel(rnumber);
            $scope.colorFlagArray = [0, 0, 0, 0, 0, 0];
            for (i = 0; i < 6; i++) {
                if (rnumber == i + 1) {
                    $scope.colorFlagArray[i] = rnumber;
                }
                else {
                    $scope.colorFlagArray[i] = 0;
                }
            }
        }, 700);

    $scope.findTheClassToBeSet = function (box) {
        var colorArray = [0, 0, 0, 0, 0, 0];
        colorArray = $scope.colorFlagArray;
        var str = 'color-black';
        var num = 0;

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
        return str;
    }

});