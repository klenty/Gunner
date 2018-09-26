"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Only imported for JSDoc

/* eslint-disable-next-line */
var Gunner = require('../Gunner');

Promise.object = require('@codefeathers/promise.object');

var _require = require('../util'),
    last = _require.last,
    pipe = _require.pipe,
    pick = _require.pick,
    assignToObject = _require.assignToObject;

var _require2 = require('../util/constants'),
    eventMap = _require2.eventMap;

var emitter = require('./emitter');

var buildTestQueue = require('./buildTestQueue');

var getError = function getError(E) {
  return E.error.stack || E.error;
};

var findSkip = function findSkip(skip, unit) {
  var startFailed = skip.findIndex(function (x) {
    return x.type === '@start';
  });
  var everyFailed = skip.findIndex(function (x) {
    return x.type === '@every';
  });
  var beforeFailed = skip.findIndex(function (x) {
    return x.description === unit.description;
  });
  return startFailed !== -1 && 'A start hook failed\n' + getError(skip[startFailed]) || everyFailed !== -1 && 'An every hook failed\n' + getError(skip[everyFailed].error) || beforeFailed !== -1 && 'A before test hook failed\n' + getError(skip[beforeFailed]);
};

var reduceQueue = function reduceQueue(queue) {
  return queue.reduce(function (acc, item) {
    return Promise.resolve(acc).then(function (acc) {
      return Promise.all([last(acc.results), Promise.object(acc.state)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            state = _ref2[1];

        var toSkip = findSkip(acc.skip, item.unit);
        return [toSkip, state];
      }).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            toSkip = _ref4[0],
            state = _ref4[1];

        return toSkip ? {
          status: 'skip',
          description: toSkip
        } : item.unit.run(state);
      }).then(function (result) {
        var status = result.status,
            duration = result.duration;

        if (item.type === '@test') {
          var resultObject = _objectSpread({
            status: status,
            duration: duration,
            description: item.unit.description
          }, (status === 'notOk' || status === 'skip') && {
            reason: result.error || result.rejection || result.description
          });

          emitter.emit(eventMap[status], resultObject);
          acc.results.push(resultObject);
        } else {
          var identifier = item.unit.label || queue.filter(function (i) {
            return i.type === item.type;
          }).filter(function (i) {
            return i.unit.description === item.unit.description;
          }).length;
          var stateAddition =
          /* eslint-disable-next-line */
          status === 'ok' ? result.promise ? result.resolve : result.value : null;
          if (identifier && stateAddition) assignToObject(acc.state, item.type)(identifier, stateAddition);
        }

        if (status === 'notOk') {
          acc.skip.push({
            type: item.type,
            description: item.unit.description,
            error: result.promise ? result.rejection : result.error
          });
        }

        return acc;
      });
    });
  }, {
    results: [],
    state: {},
    skip: []
  });
};
/**
 * runs the test suite
 * @param {Gunner} instance
 * @param {object} options
 */


var testrunner = function testrunner(instance) {
  var perf = {
    start: new Date()
  };
  return Promise.object(pipe(buildTestQueue, reduceQueue, pick('results'))(instance)).then(function (results) {
    perf.end = new Date();
    results.end = perf.end.toUTCString();
    results.start = perf.start.toUTCString();
    results.duration = perf.end - perf.start;
    return results;
  });
};

module.exports = testrunner;