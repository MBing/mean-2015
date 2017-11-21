'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope','$timeout', 'appHttp', 'UserModel', '$location', '$q', function($scope, $timeout, appHttp, UserModel, $location, $q) {
	var vm = this;

	vm.log = [];

	function logIt(text, params) {
		console.log('logIt:', text);
		vm.log.push(text);
	}
	vm.user =UserModel.load();
	
	vm.swipeIt = function(evt, direction, params) {
		logIt('swipe: '+direction);
	};
	
	vm.tapIt = function(evt, params) {
		logIt('tap');
	};

	function asyncFunc (var1, callback) {
		$timeout(function () {
			logIt('timeout finished');
			callback();
		}, 1000);
		logIt('timeout started');
	}

	function asyncFuncPromise(var1) {
		var deferred = $q.defer();
		$timeout(function () {
			logIt('timeout finished');
			deferred.resolve();
		}, 1000);
		logIt('timeout started');

		return deferred.promise;
	}
	
	$scope.$on('myEvt', function (evt, params) {
		logIt('async event done');
	});
	
	vm.triggerAsync = function () {
		asyncFunc(5, function () {
			logIt('async done');
        });

		asyncFuncPromise(5)
			.then(function () {
				logIt('async promise resolved');
			});

		$timeout(function () {
			$scope.$broadcast('myEvt', {});
        }, 1000);
		$scope.$broadcast('myEvt', {});
    };

	vm.funcOne = function () {
		logIt('func from controller');
	};

	vm.scopeOne = 'scope 1';

	return vm;
}]);