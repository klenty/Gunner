"use strict";

var def = require('./default');

var tap = require('./tap');

var xunit = require('./xunit');

var min = require('./min');

module.exports = {
  default: def,
  tap: tap,
  xunit: xunit,
  min: min
};