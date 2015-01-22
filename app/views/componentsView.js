// Backbone View for the collection of components

'use strict';

var Backbone = require('backbone');

// UI for each component
var ComponentView = require('views/componentView');

// Define Components View
var ComponentsView = Backbone.View.extend ({

	// Bind view to main container <div>
	el: '#main-container',

	// When a new ComponentsView is created
	initialize: function () {
		console.log('New Components view initialized');
	},

	// Render
	render: function () {
		console.log('Render called on Components View');
		
		this.collection.each(function (component) {
			console.log(component);
		});
		
		/* Build DOM nodes by rendering a MovieView for each model
		var componentsView = this.collection.map( function (component) {
			return (new ComponentView({ model: component })).render().el;
		});

		this.$el.html(componentsView);
		return this; */
	}		

});
module.exports = ComponentsView;