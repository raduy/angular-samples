'use strict';

rsControllers.controller('MainController', ['$scope', '$location', function ($scope, $location) {
    var samples = [ 
    	{name: 'stopwatch', url: 'stopwatch'},
    	{name: 'guesser', url: 'guesser'},
    	{name: 'picker', url: 'picker'}
    ];

    $scope.samples = samples;

    $scope.changeRoute = function(url) {
    	$location.path('/' + url);
    }
}]);
