'use strict';

var app = angular.module('angularApp', [
    'rs.services',
    'rs.controllers',
    'rs.directives',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/stopwatch', {
            templateUrl: 'views/stopwatch.html',
            controller: 'StopwatchController'
        })
        .when('/guesser', {
            templateUrl: 'views/guesser.html',
            controller: 'GuesserController'
        })
        .when('/picker', {
            templateUrl: 'views/picker.html',
            controller: 'PickerController'
        })
        .when('/geolocation', {
            templateUrl: 'views/geolocation.html',
            controller: 'GeoLocationController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


var resourceLoaderController = app.controller('ResourceLoaderController', ['$scope', function ($scope) {
}]);

resourceLoaderController.load = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        defer.resolve("big resource");
        console.log("resource loaded");
    }, 3000);
    return defer.promise;
}

app.run(['$rootScope', function ($root) {

    $root.$on('$routeChangeStart', function (e, curr, prev) {
        if (curr.$$route && curr.$$route.resolve) {
            // Show a loading message until promises are not resolved
            console.log($root.loadingResourses);
            console.log("start");
            $root.loadingResourses = false;
        }
    });

    $root.$on('$routeChangeSuccess', function (e, curr, prev) {
        console.log($root.loadingResourses);

        console.log("stop");

        // Hide loading message
        $root.loadingResourses = true;
    });

}]);