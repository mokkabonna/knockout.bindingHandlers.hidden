# Hidden binding for knockout

[![Build status](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.hidden.png)](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.hidden)

## Usage

HTML

	<input data-bind="hidden : myobs" >

JS

	ko.applyBindings({
		myobs : ko.observable()
	});


This binding is written in AMD. It returns the binding object. You need to attach it yourself since this allows it to coexist with other possible bindings named hidden. This will only need to be done once as it will then be attached to the knockout module.

	define(['knockout', 'somefolder/hidden'], function(ko, hidden){
		ko.bindingHandlers.hidden = hidden;
		//use knockout
	});

## Behaviour

TODO:

### valueUpdate


## Demo

There is a demo at http://mokkabonna.github.io/knockout.bindingHandlers.hidden

## Dependencies

- knockout

For accurate versions check bower.json

## Contributing

Clone, then run (assuming you have node)

    npm install
    grunt bower //this is to install all bower packages

You can now use grunt develop for a ready made watch task for development. Tests, linting..

    grunt develop
