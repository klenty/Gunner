"use strict";

var _require = require('../util/constants'),
    eventMap = _require.eventMap,
    eventVerbs = _require.eventVerbs;

var _require2 = require('../util/nodeutils'),
    clear = _require2.clear;

var convert = function convert(x) {
  return x;
};

var count = {
  pass: 0,
  fail: 0,
  skip: 0,
  collapse: function collapse() {
    return this.pass + this.fail + this.skip;
  }
};

var doneHandler = function doneHandler(event) {
  clear();
  var mapEvent = eventMap[event.status];
  count[mapEvent]++;
  console.log("".concat(count[mapEvent], " tests ").concat(eventVerbs[mapEvent][2]) + " (total: ".concat(count.collapse(), ")"));
};

var Min = function Min(runner) {
  runner.on('start', function () {
    return console.log('Started tests');
  });
  runner.on('pass', doneHandler);
  runner.on('fail', doneHandler);
  runner.on('skip', doneHandler);
  runner.on('end', function (results) {
    clear();
    console.log("Test suite ".concat(results.name, " has done running."));
    console.log('Success ratio:', results.successPercent, '%');
  });
};

module.exports = Min;
module.exports.convert = convert;