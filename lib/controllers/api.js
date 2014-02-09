'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    HappiestStates = mongoose.model('happiest_states'),
    ObjectId = require('mongoose').Types.ObjectId;

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Get states data available
 */


/**
 * Get happiest states
 */
exports.happiestStates = function(req, res) {
    var query = {};
    console.log("With ID? " + req.params.id);
    if (req.params.id) {
        query = {_id: new ObjectId(req.params.id)};
    }
    return HappiestStates.find(query, function (err, happyStates) {
        if (!err) {
            return res.json(happyStates);
        } else {
            return res.send(err);
        }
    });
};
