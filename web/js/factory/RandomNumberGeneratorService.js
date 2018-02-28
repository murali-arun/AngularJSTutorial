
/*It is used to call the JAVA Api for generating the random value between 1 - 6 using $resource .
* It is written for analyzing $http and $resource.
* getRandomNumber() is used for the calling the REST.
* To be done later*/

app.factory('RandomNumberGeneratorService', function ($resource) {

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