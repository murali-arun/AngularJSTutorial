<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ANGULARJS</title>
</head>
<script src="/js/angular.min.js"></script>
<script src="/js/main.js"></script>
<link rel="stylesheet" href="/css/main.css">
<body>

<div data-ng-app="myApp">

    <div class="container" data-ng-controller="RandomizeNumberInAll" data-ng-init='colors=["red","blue","yellow","brown","black","orange"];randomize();'>

        <div class="arrange"  id="one-one" ng-class="whichClass(1)">
            <p>Color 1</p>
            <p> Value : {{colorItem[0]}}</p>
        </div>
        <div class="arrange"   id="one-two" ng-class="whichClass(2) ">
            <p>Color 2</p>
            <p> Value :{{colorItem[1]}}</p>
        </div>
        <div class="arrange"  id="one-three" ng-class="whichClass(3)">
            <p>Color 3</p>
            <p> Value :{{colorItem[2]}}</p>
        </div>
        <div class="arrange" id="two-one" ng-class="whichClass(4)">
            <p>Color 4</p>
            <p> Value :{{colorItem[3]}}</p>
        </div>
        <div class="arrange"  id="two-two" ng-class="whichClass(5)">
            <p>Color 5</p>
            <p> Value :{{colorItem[4]}}</p>
        </div>
        <div class="arrange"  id="two-three" ng-class="whichClass(6)">
            <p>Color 6</p>
            <p> Value :{{colorItem[5]}}</p>
        </div>

    </div>

    <div class="centreButton" id="centre-Button" data-ng-controller="calculateKeyPressed">
        <label>Type something:
            <input type="text"
                   ng-keypress="onKeyPress($event)"/>
        </label><br/>
        <strong>KEY PRESS RESULT:</strong> {{onKeyPressResult}}

    </div>

    <div class="score" id="score-Button" data-ng-controller="scoreBoard" ng-init="scoreCal()">
        <p>{{score}}</p>
    </div>

</div>
</body>
</html>
