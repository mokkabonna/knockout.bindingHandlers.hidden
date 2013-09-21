define(['knockout'], function(ko) {
	'use strict';
	return {
		update: function(element, valueAccessor) {
			ko.bindingHandlers.visible.update(element, function() {
				return !ko.utils.unwrapObservable(valueAccessor());
			});
		}
	};
});
