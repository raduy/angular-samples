'use strict';

rsControllers.controller('PickerController', ['$scope', function($scope) {

	var days = [];
	for(var i = 0; i < 30; i++) {
		days.push({which: i, picked: false});
	}

	$scope.data = {
		days: days
	}

	$scope.toggle = function(index) {
		$scope.data.days[index].picked = !$scope.data.days[index].picked;
	}

}]);