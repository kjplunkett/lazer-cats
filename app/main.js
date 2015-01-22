// Main JS File - Puts it all together
'use strict';

// Node/Browserify Require
var $ = require('jquery');
var Backbone = require('backbone');
// Why do this? What does it mean?
Backbone.$ = $;

var Components = require('collections/components');
var testData = require('../testData.json');
var ComponentView = require('views/componentView');

// Initialize a new Components collection
// Input the test data into the collection
var components = new Components(testData);

// Export the module 
module.exports = { components: components, ComponentView: ComponentView };