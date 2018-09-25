"use strict";

// Only imported for JSDoc

/* eslint-disable-next-line */
var Gunner = require('../Gunner');

var symbols = require('../util/symbols');

var wrap = function wrap(type) {
  return function (unit) {
    return {
      type: type,
      unit: unit
    };
  };
};
/**
 * runs the test suite
 * @param {Gunner} instance
 */


var buildTestTree = function buildTestTree(instance) {
  var testQueue = [];
  Array.prototype.push.apply(testQueue, instance.__suite__.beforeHooks[symbols.Start].map(wrap('@start')));
  testQueue.push.apply(instance.__suite__.afterHooks[symbols.Start].map(wrap('@start')));

  instance.__suite__.tests.forEach(function (test) {
    return Array.prototype.push.apply(testQueue, instance.__suite__.beforeHooks['*'].map(wrap('@every'))), Array.prototype.push.apply(testQueue, (instance.__suite__.beforeHooks[test.description] || []).map(wrap('@this'))), testQueue.push(wrap('@test')(test)), Array.prototype.push.apply(testQueue, (instance.__suite__.afterHooks[test.description] || []).map(wrap('@afterTest'))), Array.prototype.push.apply(testQueue, instance.__suite__.afterHooks['*'].map(wrap('@afterEvery')));
  });

  Array.prototype.push.apply(testQueue, instance.__suite__.beforeHooks[symbols.End].map(wrap('@beforeend')));
  Array.prototype.push.apply(testQueue, instance.__suite__.afterHooks[symbols.End].map(wrap('@end')));
  return testQueue;
};

module.exports = buildTestTree;