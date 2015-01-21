// Backbone Model for Web Component viewer

'use strict';

var Backbone = require('backbone');

// Define the Component model 
var Component = Backbone.Model.extend ({

	// Default attributes of each component 
	defaults: {
		name: '',
		html: '',
		css: '',
		js: '',
		img: '',
		about: ''
	},	
	// When the new model is created
	initialize: function () {
		console.log('New Component model initialized');
	}
});

module.exports = Component;