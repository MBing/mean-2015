/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
@param {Object} scopeOne A scope property
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
@param {Object} customText Some special text
TODO

@dependencies
TODO

@usage
partial / html:
<div app-my-directive></div>
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular
	.module('app')
	.directive('appMyDirective', [ function () {

	return {
		restrict: 'A',
		scope: {
			scopeOne: '=',
			funcOne: '&?'
		},

		// replace: true,
		template: function(element, attrs) {
			var defaultsAttrs ={
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}

			if (!attrs.customText) {
				attrs.customText = '';
			}
			var html ="<div class='app-my-directive-wrapper'>"+
				"my-directive"+
				"<br />" +
				"<br />custom text: " + attrs.customText +
				"<br />scope One: {{vm.scopeOne}}" +
				"<br />scope Two: {{vm.scopeTwo}}" +
				"<br />" +
				"<div class='btn' ng-click='vm.emitEvt()'>Emit event</div>" +
				"<div class='btn' ng-click='vm.funcOne()'>Func One</div>" +
			"</div>";
			return html;
		},
		
		link: function(scope, element, attrs) {
		},
		
		controller: function($scope, $element, $attrs) {
			var vm = this;
			vm.scopeTwo = 'Scope 2';

			vm.emitEvt = function () {
				$scope.$emit('appMyDirective', {});
				console.log('my directive emit event');
			};

			return vm;
		},
		controllerAs: 'vm',
		bindToController: true
	};
}]);