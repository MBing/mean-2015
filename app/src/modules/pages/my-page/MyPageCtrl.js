/**
*/

'use strict';

angular.module('myApp').controller('MyPageCtrl', ['$scope', 'appItemsList',
function($scope, appItemsList) {
	$scope.items = appItemsList.load({});
}]);