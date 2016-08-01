'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes - commented out for now
  app.get('/api/awesomeThings', api.awesomeThings);
  app.get('/api/happiestStates/:id?', api.happiestStates);
  app.get('/api/happiestTimes', api.happiestTimes);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};
