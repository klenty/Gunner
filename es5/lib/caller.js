"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../util'),
    isPromise = _require.isPromise;

var caller = function caller(test, state) {
  var perf = {
    start: 0,
    end: 0
  };
  var value, error, errored;

  try {
    perf.start = new Date();
    value = test(state);
    perf.end = new Date();
  } catch (e) {
    perf.end = new Date();
    errored = true;
    error = e;
  }

  var promise = isPromise(value);

  if (promise) {
    return value.then(function (res) {
      return {
        duration: new Date() - perf.start,
        status: 'ok',
        resolve: res,
        promise: true
      };
    }).catch(function (rej) {
      return {
        duration: new Date() - perf.start,
        status: 'notOk',
        rejection: rej,
        promise: true
      };
    });
  } else {
    return Promise.resolve(_objectSpread({
      duration: perf.end - perf.start,
      status: errored ? 'notOk' : 'ok'
    }, !errored && {
      value: value
    }, errored && {
      error: error
    }, {
      promise: false
    }));
  }
};

module.exports = caller;