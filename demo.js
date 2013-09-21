// Configure RequireJS so it resolves relative module paths from the `src` folder.
require.config({
    baseUrl: '',
    paths: {
        knockout: 'lib/knockout.js/knockout'
    }
});


require(['knockout', 'src/hidden'], function(ko, hidden) {
    ko.bindingHandlers.hidden = hidden; //attach the binding

    //implement here the demo of your binding
    var viewModel = {
        demo: ko.observable(false),
        toggle : function() {
            viewModel.demo(!viewModel.demo());
        }
    };

    viewModel.json = ko.computed(function() {
        var model = ko.toJS(viewModel);
        delete model.json;
        return JSON.stringify(model, null, 2);
    });

    ko.applyBindings(viewModel);
});
