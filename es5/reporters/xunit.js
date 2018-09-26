"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toXML = require('jsontoxml');

var _require = require('../util/nodeutils'),
    clear = _require.clear;

var toJSON = function toJSON(resultsArray) {
  return {
    testsuites: resultsArray.map(function (results) {
      var name = results.name,
          count = results.count,
          success = results.success,
          failures = results.failures,
          skipped = results.skipped;
      return {
        name: 'testsuite',
        attrs: {
          name: name,
          tests: count,
          success: success.length,
          failures: failures.length,
          skipped: skipped.length,
          timestamp: new Date().toUTCString(),
          time: results.duration / 1000 || 0
        },
        children: results.reduce(function (acc, r) {
          var reason = r.reason ? r.reason.stack || r.reason : '';
          var content = r.status !== 'ok' && r.status === 'skip' ? {
            name: 'skipped',
            text: reason
          } : {
            name: 'failure',
            text: reason
          };
          acc.push(_objectSpread({
            name: 'testcase',
            attrs: {
              name: r.description,
              time: r.duration / 1000 || 0
            }
          }, _typeof(content) === 'object' && content, _typeof(content) === 'object' && {
            children: [content]
          }));
          return acc;
        }, [])
      };
    })
  };
};

var convert = function convert(results) {
  return toXML(toJSON(results), {
    xmlHeader: {
      standalone: true
    }
  });
};

var xunit = function xunit(runner) {
  return runner.on("end", function (results) {
    return clear(), console.log(convert([results]));
  });
};

module.exports = xunit;
module.exports.convert = convert;