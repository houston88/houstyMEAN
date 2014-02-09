'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema - Just use any for now.
 */
var HappiestStatesSchema = new Schema({
    any: {}
});

mongoose.model('happiest_states', HappiestStatesSchema);
