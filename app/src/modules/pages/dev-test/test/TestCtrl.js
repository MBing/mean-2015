'use strict';

angular.module('myApp').controller('TestCtrl', ['$timeout', 'appHttp', 'UserModel', '$location', function($timeout, appHttp, UserModel, $location) {
	var vm = this;

	vm.user =UserModel.load();
	
	vm.swipeIt = function(evt, direction, params) {
		console.log('swipe: '+direction);
	};
	
	vm.tapIt = function(evt, params) {
		console.log('tap');
	};

	vm.scopeOne = 'scope one';

	return vm;
}]);