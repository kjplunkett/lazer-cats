// Main JS File - Puts it all together
'use strict';

// Node/Browserify Require
var Backbone = require('backbone');
var Components = require('collections/components');
var testData = require('../testData.json');

// Initialize a new Components collection
// Input the test data into the collection
var components = new Components(testData);

// Export the module 
module.exports = components;