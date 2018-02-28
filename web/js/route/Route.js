var app = angular.module('myApp', ['ngRoute','ngResource', 'ngAnimate']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/html/Main.html"
        })
        .when("/Number", {
            templateUrl : "/html/Number.html"
        })
        .when("/Keyboard", {
            templateUrl : "/html/Keyboard.html"
        })
});
