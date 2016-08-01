'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * happiest_states collection in mongo
 */
var HappiestTimesSchema = new Schema({
    parseDate: Date,
    score: Number
});

mongoose.model('HappiestTimes', HappiestTimesSchema, 'happiest_times');
