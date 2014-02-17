# MEAN Sorta Simple Start

## Yeoman AngularJs Full Stack generator provides:

 * Express server integrated with grunt tasks
 * Livereload of client and server files
 * Support for Jade and CoffeeScript
 * Easy deployment workflow.
 * Optional MongoDB integration
 * Optional Passport integration for adding user accounts

## Then modified to create a base project for:

 * MEAN stack starter project, customized for family launch page.
 * Based on the bootstrap 3.0 carousel example.
 * Added to mongoose api that connects to mongo for some example data viz.

After cloning, assuming you have the tools downloaded as outlined on http://mean.io, run the following.

Download the npm packages:
```
npm install
```

Download the bower libraries:
```
bower install
```

### For more details refer to the AngularJs Full Stack generator docs:

> https://github.com/DaftMonk/generator-angular-fullstack/

## To Run

Start monogo: `mongod &`

To start in dev mode: `grunt serve`

To start in production/minified mode: `grunt serve:dist`

### To run as a daemon

Install forever: `npm install forever`

Start as daemon on port 80 (as root), have to build first with grunt: `./start.sh`

Stop daemon: `./stop.sh`