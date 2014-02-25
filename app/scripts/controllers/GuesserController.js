'use strict';

rsControllers.controller('GuesserController', ['$scope', function ($scope) {

	var exch = function (array, i, j) {
		var tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	}

	var shuffle = function (array) {
		var size = array.length;
		for(var i = 0; i < size; i++) {
			var toSwap = i + Math.floor(Math.random() * (size - i));
			exch(array, i, toSwap);
		}
	}

	$scope.model = {
		input: "",
		values: ['angular', 'bower', 'karma', 'jasmine', 'yo']	
	}

	var indexOfValueToGuess;
	
	$scope.toggle = function() {
		shuffle($scope.model.values);
		indexOfValueToGuess = Math.floor(Math.random() * $scope.model.values.length);
	}

	$scope.toggle();
	
	$scope.$watch('model.input', function(value) {
		if ($scope.model.input === $scope.model.values[indexOfValueToGuess]) {
			$scope.model.guessed = true;
			return;
		}
		$scope.model.guessed = false;
	});
	
}]);