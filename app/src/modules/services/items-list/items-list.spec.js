'use strict';

describe('appMyService factory', function() {
	var $rootScope ={}, appMyService;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _appMyService_) {
		$rootScope = _$rootScope_;
		appMyService =_appMyService_;
	}));
	
	// afterEach(function() {
	// });
	
	/*
	it('should do something', function() {
	});
	*/
});