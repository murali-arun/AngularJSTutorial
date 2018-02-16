<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ANGULARJS</title>
</head>
<script src="/js/angular.min.js"></script>
<script src="/js/main.js"></script>
<link rel="stylesheet" href="/css/main.css">
<body>

<div class="container" data-ng-app="myApp" data-ng-controller="myCtrl" >

    <div class="arrange" id="one-one">
        <input type="text">
        <p>Name: </p>
        <p>The name is {{RName}} </p>
        <button type="button" ng-click="myfunction()">Try it NOW</button>
        <p>My first expression: {{ 5 + 5 }}</p>
        First Name: <input type="text" value="{{fName}}"><br>
        Last Name: <input type="text" value="{{lName}}"> <br>

    </div>
    <div class="arrange" id="one-two" data-ng-controller="myCtr2">
        <input style="background-color:{{myCol}}" ;type="text" ng-model="myCol" ng-model="RName">
        <p>Name: {{RName}}</p>
        <p>The name is ({{myName()}}) </p>
    </div>
    <div class="arrange" id="one-three" data-ng-controller="myArrayRepeat">
        <ul>
            <li ng-repeat="x in myArray">
                {{x.name + "---------------" + x.country}}
            </li>
        </ul>
        <form name="myform">
            Email:<input type="email" name="myAddress" ng-model="text">
            <span ng-show="myform.myAddress.$error.email">Not a valid e-mail address</span>
        </form>

    </div>
    <div class="arrange" id="two-one" data-ng-controller="myArrayRepeat">
        <ul>
            <li ng-repeat="x in myArray">
                {{x.name + "---------------" + x.country}}
            </li>
        </ul>
        <form name="myform">
            Email:<input type="email" name="myAddress" ng-model="text">
            <span ng-show="myform.myAddress.$error.email">Not a valid e-mail address</span>
        </form>

    </div>

    <div class="arrange" id="two-two" data-ng-controller="myArrayRepeat">
        <ul>
            <li ng-repeat="x in myArray">
                {{x.name + "---------------" + x.country}}
            </li>
        </ul>
        <form name="myform">
            Email:<input type="email" name="myAddress" ng-model="text">
            <span ng-show="myform.myAddress.$error.email">Not a valid e-mail address</span>
        </form>

    </div>
    <div class="arrange" id="two-three" data-ng-controller="myArrayRepeat">
        <ul>
            <li ng-repeat="x in myArray">
                {{x.name + "---------------" + x.country}}
            </li>
        </ul>
        <form name="myform">
            Email:<input type="email" name="myAddress" ng-model="text">
            <span ng-show="myform.myAddress.$error.email">Not a valid e-mail address</span>
        </form>


</div>
</div>

</body>
</html>
