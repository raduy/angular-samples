'use strict';

rsControllers.controller('GeoLocationController', ['$scope', '$window', function($scope, $window) {

    $scope.geo = {
        x: 31,
        y: 4
    };
    
    $scope.printer = function(position) {
        $scope.$apply(function() {
            $scope.coords = position.coords
        });
//        console.log("pos"  + position.coords.longitude);
//        $scope.geo.x = 321;
//        $scope.geo.latitude = position.coords.latitude;
//        $scope.geo.longitude = position.coords.longitude
//        };

//        console.log($scope.geo);
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
