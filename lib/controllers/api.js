'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    HappiestStates = mongoose.model('HappiestStates'),
    HappiestTimes = mongoose.model('HappiestTimes'),
    ObjectId = mongoose.Types.ObjectId;

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
 * Get happiest states
 */
exports.happiestStates = function(req, res) {
    var query;
    //console.log("With ID? " + req.params.id);
    if (req.params.id) {
      // Get everything since we have an id
      query = HappiestStates.find({_id: new ObjectId(req.params.id)});
    } else {
      // Limit query to parseDate and fileName, sort by parseDate descending
      query = HappiestStates.find().sort('parseDate').select('parseDate fileName');
    }
    query.exec(function (err, happyStates) {
        if (!err) {
            return res.json(happyStates);
        } else {
            return res.send(err);
        }
    });
};

exports.happiestTimes = function(req, res) {
  var query = HappiestTimes.find().sort('parseDate');
  query.exec(function (err, happyStates) {
      if (!err) {
          return res.json(happyStates);
      } else {
          return res.send(err);
      }
  });
};
