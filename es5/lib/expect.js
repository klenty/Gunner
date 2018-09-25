'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('../util'),
    liftPromise = _require.liftPromise,
    lowerCaseFirstLetter = _require.lowerCaseFirstLetter;

var library = require('./assertionsLibrary');

var assertPromise = require('./assertPromise');

var expectPromise = function expectPromise(pred, statement) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (toTest) {
    return function () {
      for (var _len = arguments.length, testValues = new Array(_len), _key = 0; _key < _len; _key++) {
        testValues[_key] = arguments[_key];
      }

      return liftPromise(function (resolvedValue) {
        return assertPromise(pred.apply(void 0, [toTest].concat(testValues)), [statement, resolvedValue].concat(testValues));
      }, toTest).catch(function (rejectedValue) {
        return options.shouldCatch ? assertPromise(pred.apply(void 0, [toTest].concat(testValues)), [statement, rejectedValue].concat(testValues), {
          skipStatement: rejectedValue
        }) : Promise.reject(rejectedValue);
      });
    };
  };
};

var expects = Object.keys(library).reduce(function (acc, e) {
  var _library$e = _slicedToArray(library[e], 3),
      pred = _library$e[0],
      statement = _library$e[1],
      options = _library$e[2];

  acc[e] = expectPromise(pred, statement, options);
  return acc;
}, {});

var negateP = function negateP(prom) {
  return prom.then(Promise.reject, Promise.resolve);
};

var expect = function expect(thing, args) {
  return new Proxy({}, {
    get: function get(obj, prop) {
      var toCheck = args ? thing.apply(void 0, _toConsumableArray(args)) : thing;
      if (expects.hasOwnProperty(prop)) return function () {
        return expects[prop](toCheck).apply(void 0, arguments);
      };else if (prop.slice(0, 3) === 'not') return function () {
        return negateP(expects[lowerCaseFirstLetter(prop.slice(3))](toCheck).apply(void 0, arguments));
      };else throw new Error('Unknown assertion method', prop);
    }
  });
};

var expectMany = function expectMany() {
  for (var _len2 = arguments.length, expects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    expects[_key2] = arguments[_key2];
  }

  return Promise.all(expects);
};

module.exports = expect;
module.exports.expectMany = expectMany;