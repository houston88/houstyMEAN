'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * happiest_states collection in mongo
 */
var HappiestStatesSchema = new Schema({
    parseDate: Date,
    fileName: String
});

mongoose.model('HappiestStates', HappiestStatesSchema, 'happiest_states');
