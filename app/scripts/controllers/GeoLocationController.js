'use strict';

rsControllers.controller('GeoLocationController', ['$scope', '$window', function($scope, $window) {

    $scope.printer = function(position) {
        $scope.$apply(function() {
            $scope.coords = position.coords
        });
    };

    var getLocation = function() {
        if($window.navigator) {
            console.log("Jupi ! geolocation supported");
            $window.navigator.geolocation.getCurrentPosition($scope.printer)
        } else {
            alert('What a pity, but your browser not support geolocation')
        }
    };

    $window.onload = getLocation();
}]);
