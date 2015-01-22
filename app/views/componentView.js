// Backbone View for the individual components

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var ComponentView = Backbone.View.extend ({
	
	// Bind view to testing <div>
	el: '#testingCompView',

	// When this view is created
	initialize: function () {
		console.log('New Component view initialized');
	},

	// Render
	render: function () {
		console.log('Render called');
		this.$el.html('Hey');
		// Why return this?
		return this;
	}

});

module.exports = ComponentView;