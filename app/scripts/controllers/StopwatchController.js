'use strict';

rsControllers.controller('StopwatchController', ['$scope', '$interval', function ($scope, $interval) {
	$scope.stopwatch = {
		acctualTime: new Date()
	}

	var updateTime = function() {
		$scope.stopwatch.acctualTime = new Date();
	}	

	$interval(updateTime, 1000);

	$scope.stopwatch.going = false;

	$scope.stopwatch.status = 'start';

	var counter;

	var start = function() {
		$scope.stopwatch.going = true;
		$scope.stopwatch.status = 'stop';

		$scope.stopwatch.elapsed = $scope.stopwatch.time;

		counter = $interval(function() {
			if ($scope.stopwatch.elapsed === 0) {
				$interval.cancel(counter);
				stop();
			}
			$scope.stopwatch.elapsed = $scope.stopwatch.elapsed - 1;
			console.log("tik");
		}, 1000);
	}

	var stop = function() {
		if (counter !== undefined) {
			$interval.cancel(counter);
		};
		$scope.stopwatch.going = false;

		$scope.stopwatch.status = 'start';

	}

	$scope.stopwatch.changeStatus = function() {
		var status = $scope.stopwatch.status;
		if (status === 'start') {
			start();
		} else {
			stop();
		}
	}
}]);