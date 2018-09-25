"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('../util'),
    isPromise = _require.isPromise;

var createRejectionStatement = function createRejectionStatement(statement) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return Promise.reject(statement ? statement.apply(void 0, args) : '');
};

var assertPromise = function assertPromise(bool, statementTuple) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _statementTuple = _toArray(statementTuple),
      statement = _statementTuple[0],
      args = _statementTuple.slice(1);

  statement = options.skipStatement ? function () {
    return options.skipStatement;
  } : statement;
  if (isPromise(bool)) return bool.catch(function () {
    return createRejectionStatement.apply(void 0, [statement].concat(_toConsumableArray(args)));
  });
  return bool ? Promise.resolve() : createRejectionStatement.apply(void 0, [statement].concat(_toConsumableArray(args)));
};

module.exports = assertPromise;