"use strict";

var fs = require("fs").promises;

var _require = require('../util'),
    map = _require.map,
    pipe = _require.pipe,
    filter = _require.filter,
    flatten = _require.flatten,
    wrapWith = _require.wrapWith,
    promiseAll = _require.promiseAll,
    containsPath = _require.containsPath; // const { warn } = console;
// const validate = config => {
// 	if(!config) throw new Error(`Create a config file to proceed.`);
// 	if(!config.testData) throw new Error(`"testData" property not found in config.js`);
// 	if(!config.plans) throw new Error(`"planDir" property not found in config.js`);
// 	if(!config.pattern) warn(`> "pattern" property not found in config.js.`
// 		+ ` All json files in the target directory will be loaded.`);
// };


var isFileOrDir = function isFileOrDir(path) {
  return fs.stat(path).then(function (stat) {
    return stat.isDirectory() ? {
      path: path,
      type: "dir"
    } : {
      path: path,
      type: "file"
    };
  });
};

var _matchOnePattern = function _matchOnePattern(pattern, path) {
  var tests = Array.isArray(pattern) ? pattern : [pattern];
  return tests.some(function (test) {
    return new RegExp(test).test(path);
  });
};

var _getEachFile = function _getEachFile(_ref) {
  var path = _ref.path,
      exclude = _ref.exclude,
      pattern = _ref.pattern;
  return function (item) {
    return isFileOrDir(path + "/" + item).then(function (y) {
      if (exclude && containsPath(exclude, y.path)) return [];
      /* eslint-disable-next-line */

      return y.type === "dir" ? requireDeep({
        plans: y.path,
        exclude: exclude,
        pattern: pattern
      }) : _matchOnePattern(pattern || '.json', y.path) // Wrapping in object to prevent accidental flattening
      ? wrapWith("module")(require(y.path)) : [];
    });
  };
};

var requireDeep = function requireDeep(_ref2) {
  var path = _ref2.plans,
      exclude = _ref2.exclude,
      _ref2$pattern = _ref2.pattern,
      pattern = _ref2$pattern === void 0 ? '.json' : _ref2$pattern;
  return isFileOrDir(path).then(function (o) {
    return o.type === "dir" ? pipe(fs.readdir, map(_getEachFile({
      path: path,
      exclude: exclude,
      pattern: pattern
    })), promiseAll, flatten, filter(Boolean), // Filter out undefined values
    map(function (y) {
      return y.module || y;
    }) // Unwrap objects from their wrappers
    )(o.path) : Promise.reject("".concat(path, " is not a directory"));
  });
};

module.exports = requireDeep;