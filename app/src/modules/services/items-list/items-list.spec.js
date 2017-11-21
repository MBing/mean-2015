'use strict';

describe('appItemsList factory', function() {
	var $rootScope ={}, appItemsList;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _appItemsList_) {
		$rootScope = _$rootScope_;
        appItemsList =_appItemsList_;
	}));
	
	// afterEach(function() {
	// });
	
	it('should save items', function() {
		var items = [1, 2];
		appItemsList.save(items);
		expect(appItemsList.items[0]).toBe(1);
	});

    it('should read items', function() {
        var items = appItemsList.read({});
        expect(items[0].title).toBe('title 1');
    });

    it('should read items with existing items', function() {
    	appItemsList.items = ['three', 'four'];
        var items = appItemsList.read({});
        expect(items[0]).toBe('three');
    });
});