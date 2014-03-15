/* jshint boss:true*/
define(['knockout'], function(ko) {
  'use strict';

  return ko.bindingHandlers.hidden = {
    update: function(element, valueAccessor) {
      ko.bindingHandlers.visible.update(element, function() {
        return !ko.utils.unwrapObservable(valueAccessor());
      });
    }
  };
});
