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

	// Testing another template for toJSON in the view
	template: '<h2><%= js  %><hr></h2>',
	
	// When this view is created
	initialize: function () {
		console.log('New Component view initialized');
		this.listenTo(this.model, 'change:name', this.render);
	},

	// Render
	render: function () {
		console.log('Render called');
		var tmpl = _.template(this.template);
		this.$el.html(tmpl(this.model.toJSON()));
		// Why return this?
		return this;
	}

});

module.exports = ComponentView;