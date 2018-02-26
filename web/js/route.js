var app = angular.module('myApp', ['ngRoute','ngResource', 'ngAnimate']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/html/main.html"
        })
        .when("/Number", {
            templateUrl : "/html/number.html"
        })
        .when("/Keyboard", {
            templateUrl : "/html/keyboard.html"
        })
});
