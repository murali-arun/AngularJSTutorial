<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>GAME</title>
    <script src="/js/AngularJSHeaderScripts/angular.min.js"></script>
    <script src="/js/AngularJSHeaderScripts/angular-animate.min.js"></script>
    <script src="/js/AngularJSHeaderScripts/angular-Resource.js"></script>
    <script src="/js/AngularJSHeaderScripts/angular-route.js"></script>
    <script src="/js/AngularJSHeaderScripts/require.js"></script>

    <script src="/js/route/Route.js"></script>
    <script src="/js/factory/RandomNumberFactory.js"></script>
    <script src="/js/factory/RandomNumberGeneratorService.js"></script>

    <script src="/js/services/RandomNumber.js"></script>
    <script src="/js/factory/UserInputModel.js"></script>
    <script src="/js/factory/TotalScoreFactory.js"></script>

    <script src="/js/controllers/RandomColorGenerator.js"></script>
    <script src="/js/controllers/FindTheKeyPressed.js"></script>
    <script src="/js/controllers/FindTheButtonPressed.js"></script>
    <script src="/js/controllers/ScoreBoard.js"></script>

</head>

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
