"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _stringify = require('json-stringify-safe');

var isObject = function isObject(x) {
  return x && _typeof(x) === 'object';
};

var stringify = function stringify(obj) {
  return isObject(obj) ? obj.stack || _stringify(obj) : obj;
};

var deepFlatten = function deepFlatten(arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (v) {
    return Array.isArray(v) ? deepFlatten(v) : v;
  })));
};
/* Returns true if a promise is passed */


var isPromise = function isPromise(prom) {
  return prom && typeof prom.then === 'function';
};
/* Lift a value or promise into a function */


var liftPromise = function liftPromise(fn, thing) {
  return isPromise(thing) ? thing.then(fn) : fn(thing);
};

module.exports = {
  /* Returns true if an object is passed */
  isObject: isObject,

  /* Returns true if a promise is passed */
  isPromise: isPromise,

  /* Lift a value or promise into a function */
  liftPromise: liftPromise,

  /* Returns the element found at the given path or undefined */
  path: function path(obj) {
    return function (path) {
      return path.reduce(function (result, segment) {
        return result && result[segment];
      }, obj);
    };
  },

  /* Picks a key from an object */
  pick: function pick(key) {
    return function (obj) {
      return obj[key];
    };
  },

  /* Pipe a value or promise through any number of unary functions */
  pipe: function pipe() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (arg) {
      return fns.reduce(function (acc, fn) {
        return liftPromise(fn, acc);
      }, arg);
    };
  },

  /* Reduces an array */
  reduce: function reduce(fn, def) {
    return function (arr) {
      return arr.reduce(fn, def);
    };
  },

  /* Flattens an array of arrays to an array */
  flatten: function flatten(arrData) {
    return [].concat.apply([], arrData);
  },

  /* Deep flattens arrays */
  deepFlatten: deepFlatten,

  /* Maps a function over an array */
  map: function map(fn) {
    return function (x) {
      return x.map(fn);
    };
  },

  /* Filter an array using provided function */
  filter: function filter(fn) {
    return function (x) {
      return x.filter(fn);
    };
  },

  /* Returns identity */
  identity: function identity(x) {
    return x;
  },

  /* Wraps a value in an object with given key */
  wrapWith: function wrapWith(x) {
    return function (y) {
      return _defineProperty({}, x, y);
    };
  },

  /* Unwraps a value from an object with given key */
  unwrapFrom: function unwrapFrom(x) {
    return function (y) {
      return y[x];
    };
  },

  /* Resolves an array of Promises */
  promiseAll: function promiseAll(x) {
    return Promise.all(x);
  },

  /* Pass partial arguments and return a function that accepts the rest */
  partial: function partial(fn) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        rest[_key3] = arguments[_key3];
      }

      return fn.apply(void 0, args.concat(rest));
    };
  },

  /* Item is in collection */
  isIn: function isIn(collection, item) {
    return collection.indexOf(item) !== -1;
  },

  /* Collection contains given path */
  containsPath: function containsPath(collection, path) {
    return collection.some(function (x) {
      return path.match(new RegExp("/".concat(x, "/?$")));
    });
  },

  /* Stringifies object or coerces to string */
  stringify: stringify,

  /* Tagged Stringify */
  taggedStringify: function taggedStringify(strings) {
    for (var _len4 = arguments.length, expr = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      expr[_key4 - 1] = arguments[_key4];
    }

    return strings.reduce(function (acc, curr, i) {
      return acc + curr + (stringify(expr[i]) || '');
    }, '');
  },

  /* Short circuits with given value on pred. Else calls function */
  short: function short(pred, shorter) {
    return function (fn) {
      return function (value) {
        return pred(value) ? shorter(value) : fn(value);
      };
    };
  },

  /* Check if object has given property */
  hasProp: function hasProp(obj) {
    return function (prop) {
      return prop in obj;
    };
  },

  /* Fetches last element from list */
  last: function last(arr) {
    return arr[arr.length - 1];
  },

  /* Uppercases first letter of word */
  upperCaseFirstLetter: function upperCaseFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  },

  /* Lowercases first letter of word */
  lowerCaseFirstLetter: function lowerCaseFirstLetter(word) {
    return word[0].toLowerCase() + word.slice(1);
  },

  /* Creates an array or pushes to an existing one */
  arrayOrPush: function arrayOrPush(obj, key, item) {
    return Array.isArray(obj[key]) ? obj[key].push(item) : obj[key] = [item];
  },

  /* Assigns to key or creates a new object */
  assignToObject: function assignToObject(obj, path) {
    return function (key, value) {
      return isObject(obj[path]) ? obj[path][key] = value : obj[path] = _defineProperty({}, key, value);
    };
  }
};