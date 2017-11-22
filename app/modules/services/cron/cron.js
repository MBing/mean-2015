/**
 @fileOverview

 @module cron
 @class cron

 @toc
 //public
 0. testRun
 1. findArrayIndex
 2. sort2D
 3. isArray
 4. copy
 //private
 2.5. subSort2D
 */

'use strict';

var CronJob = require('cron').CronJob;
var self;

/**
 @param {Object} opts
 */
function Cron(opts) {
    self =this;
}

Cron.prototype.testRun =function(params) {
    new CronJob('* * * * * *', function() {
        console.log('You will see this message every second');
    }, null, true, 'America/Los_Angeles');
};

module.exports = new Cron({});