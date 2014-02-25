'use strict';

rsControllers.controller('MainController', ['$scope', '$location', function ($scope, $location) {
    var samples = [ 
    	{name: 'stopwatch', url: 'stopwatch'}
    ];

    $scope.samples = samples;

    $scope.changeRoute = function(url) {
    	$location.path('/' + url);
    }
}]);
