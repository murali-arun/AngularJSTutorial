<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>GAME</title>
</head>
<script src="/js/angular.min.js"></script>
<script src="/js/main.js"></script>
<link rel="stylesheet" href="/css/main.css">
<body>

<div data-ng-app="myApp">

    <div class="container" data-ng-controller="RandomizeNumberInAll"
         data-ng-init='colors=["red","blue","yellow","brown","black","orange"];randomize();'>

        <div class="arrange" id="one-one" ng-class="whichClass(1)">

        </div>
        <div class="arrange" id="one-two" ng-class="whichClass(2) ">

        </div>
        <div class="arrange" id="one-three" ng-class="whichClass(3)">

        </div>
        <div class="arrange" id="two-one" ng-class="whichClass(4)">

        </div>
        <div class="arrange" id="two-two" ng-class="whichClass(5)">

        </div>
        <div class="arrange" id="two-three" ng-class="whichClass(6)">

        </div>
    </div>

    <div class="centreButton" id="centre-Button" data-ng-controller="calculateKeyPressed"
         ng-keypress="onKeyPress($event)">

        <input class="centreInput" ng-model="userInput" type="text">
    </div>

    <div class="score" id="score-Button" data-ng-controller="scoreBoard" ng-init="scoreCal()">
        <p>{{score}}</p>
    </div>

</div>
</body>
</html>
