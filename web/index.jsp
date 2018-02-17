<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ANGULARJS</title>
</head>
<script src="/js/angular.min.js"></script>
<script src="/js/main.js"></script>
<link rel="stylesheet" href="/css/main.css">
<body>

<div data-ng-app="myApp" >
    <div class="container">

        <div class="arrange" id="one-one" data-ng-controller="ShowFirst">
        <button ng-click="getLatestvalue()"/>
            <p>Color 1{{one}}</p>

        </div>

        <div class="arrange" id="one-three" data-ng-controller="ShowSecond">
        <button ng-click="getLatestvalue();"/>
            <p>Color 2  : {{second}}</p><br>
            <p> Factory Value : {{fact}}</p>
        </div>
        <div class="arrange" id="two-one">
            <p>Color 1</p>
        </div>

        <div class="arrange" id="two-two">
            <p>Color 1</p>
        </div>
        <div class="arrange" id="two-three">
            <p>Color 1</p>
        </div>


    </div>

    <div class="centreButton" id="centre-Button" data-ng-controller="calculateKeyPressed">
        <label>Type something:
            <input type="text"
                   ng-keypress="onKeyPress($event)"/>
        </label><br/>
        <strong>KEY PRESS RESULT:</strong> {{onKeyPressResult}}

    </div>

    <div class="score" id="score-Button">
        <p>SCORE</p>
    </div>

</div>
</body>
</html>
