'use strict';

angular.module('angularApp', [
  'rs.controllers',
  'rs.directives',
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
