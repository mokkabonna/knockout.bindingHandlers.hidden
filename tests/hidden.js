define(['knockout', 'src/hidden'], function(ko, hidden) {
	var element, elm, model;
	module('Hidden', {
		fixture: '<button id="hiddenornot" data-bind="hidden:obs">foo</button>',
		setup: function() {
			ko.bindingHandlers.hidden = hidden;
			element = $('#hiddenornot');
			model = {
				obs: ko.observable(false)
			};
			ko.cleanNode(document.body);
			ko.applyBindings(model);
		},
		teardown: function() {
			delete ko.bindingHandlers.hidden;
		}
	});

	test('It exists!', function() {
		ok(hidden);
	});

	test('Shows element if observable false', function() {
		model.obs(false);
		equal(element.is(':hidden'), false);
	});

	test('Hides element if observable true', function() {
		model.obs(true);
		equal(element.is(':visible'), false);
	});

});
