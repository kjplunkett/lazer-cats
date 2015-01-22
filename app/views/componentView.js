// Backbone View for the individual components

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Define the ComponentView 
var ComponentView = Backbone.View.extend ({
	
	// Bind view to components <div>
	el: '#components',

	// Component View template
	componentTemplate: _.template( $('#component-template').html() ),

	// When this view is created
	initialize: function () {
		console.log('New Component view initialized');
		this.listenTo(this.model, 'change:name', this.render);
	},

	// Render
	render: function () {
		console.log('Render called');
		//this.$el.html("hello world");
		this.$el.html( this.componentTemplate({ name: this.model.get('name') }) );
		// Why return this?
		return this;
	}

});

module.exports = ComponentView;