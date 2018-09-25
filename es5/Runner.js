"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reporters = require('./reporters');

var isBrowser = new Function("try { return this === window } catch (e) { return false }");

var Runner = function Runner(instances) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (isBrowser()) throw new Error('Runner is not adapted for browsers yet.' + ' Use regular Gunner');
    instances = Array.isArray(instances) ? instances : [instances];
    if (!instances.length) throw new Error("No instances were passed to Gunner Runner");
    var type = instances[0].__proto__.constructor.name;
    if (type !== "Gunner" && type !== "Strategy") throw new Error("Runner ".concat(type, " is not one of Gunner or Strategy"));
    var RunInstances = instances.filter(function (i) {
      return i.__proto__.constructor.name === type;
    });
    if (RunInstances.length !== instances.length) throw new Error("Not all instances were of type ".concat(type));
    var perf = {
      start: new Date()
    };
    return Promise.all(RunInstances.map(function (instance) {
      return instance.run({
        reporter: 'min'
      });
    })).then(function (results) {
      perf.end = new Date();
      results.start = perf.start.toUTCString();
      results.end = perf.end.toUTCString();
      results.duration = perf.end - perf.start;
      return options.request ? _defineProperty({
        default: results
      }, options.request, reporters[options.request].convert(results)) : results;
    });
  };
};

module.exports = Runner;