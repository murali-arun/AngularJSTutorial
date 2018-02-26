<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>GAME</title>
</head>
<script src="/js/angular.min.js"></script>
<script src="/js/angular-animate.min.js"></script>
<script src="/js/angular-Resource.js"></script>
<script src="/js/angular-route.js"></script>
<script src="/js/route.js"></script>
<script src="/js/main.js"></script>
<link rel="stylesheet" href="/css/main.css">
<body ng-app="myApp">
<table>
    <tr>
        <th><p><a href="#!/">Main</a></p></th>


        <th><p><a href="#!Number">Number</a></p></th>


        <th><p><a href="#!Keyboard">Keyboard</a></p></th>

    </tr>
</table>
<div ng-view>
</div>
</body>
</html>
