/* jshint boss:true*/
define(['knockout', 'module'], function(ko, module) {
  'use strict';

  var bindingName = module.config().name || 'hidden';

  return ko.bindingHandlers[bindingName] = {
    update: function(element, valueAccessor) {
      ko.bindingHandlers.visible.update(element, function() {
        return !ko.utils.unwrapObservable(valueAccessor());
      });
    }
  };
});
