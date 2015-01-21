// Backbone Collection for Web Components

'use strict';

var Backbone = require('backbone');
var Components = require('models/component');

// Define the Components Collection
var Components = Backbone.Collection.extend({
	
	// Set the model for this Collection to the Component
	model: Components,

	initialize: function () {
		console.log('New Components Collection initialized');
	}
});
module.exports = Components;