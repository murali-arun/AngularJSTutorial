/*
 It is used to call the Java API to generate Random number using $http.
 getRandomNumber() is used for the calling the REST.
 */

app.service('RandomNumberGeneratorByHttp', function ($http, $log) {

    var rN = 0;
    //this is called 2 second later..to be checked..
    this.getRandomNumber = function () {
        $http.get('/rest/random').then(function (response) {
            $log.info(response.data);
            rN = response.data;
        });
        return rN;
    };
    /*Equivalent javascript function*/
    /*this.getRandomNumber = function () {
     i = 0;
     i = Math.floor(Math.random() * 6) + 1
     //$log.info(" I - - - > " + i);
     return i;
     }*/

});
