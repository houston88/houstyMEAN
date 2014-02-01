#!/bin/sh
# Have to run grunt first to build everything
# grunt --force if you are running remote

export PORT="80"
export NODE_ENV="production"
forever start -a -l ~/foreverLog.txt -o ~/serverLog.txt -e ~/errorLog.txt dist/server.js

