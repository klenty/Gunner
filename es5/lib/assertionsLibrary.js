"use strict";

function _templateObject17() {
  var data = _taggedTemplateLiteral(["'", "' is greater than ", ""]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["'", "' is less than ", ""]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["'", "' is not less than ", ""]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["'", "' is not greater than ", ""]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["'", "' is not of type '", "'"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["'", "' does not resolve to '", "'"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["", " is not a promise"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["", " does not exist in ", ""]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["", " does not have property '", "'"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["", " is not false"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["", " is not true"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["", " does not contain ", ""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["", " is not deeply equal to ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["", " is not equal to ", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["", " doesn't have length ", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", " is not an object"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["", " is not an array"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isEq = require('@codefeathers/iseq');

var U = require('../util');

var _ = U.taggedStringify;
module.exports.done = [function () {
  return true;
}, function () {
  return null;
}];
module.exports.fail = [function () {
  return false;
}, function (_, rejection) {
  return rejection;
}];
module.exports.exists = [function (val) {
  return typeof val !== 'undefined';
}, function () {
  return "Value is undefined";
}];
module.exports.isArray = [function (val) {
  return Array.isArray(val);
}, function (val) {
  return _(_templateObject(), val);
}];
module.exports.isObject = [function (val) {
  return _typeof(val) === 'object' && val !== null;
}, function (val) {
  return _(_templateObject2(), val);
}];
module.exports.hasLength = [function (val, l) {
  return val.length === l;
}, function (val, l) {
  return _(_templateObject3(), val, l);
}];
module.exports.equals = [function (val, thing) {
  return val === thing;
}, function (val, thing) {
  return _(_templateObject4(), val, thing);
}];
module.exports.deepEquals = [function (val, match) {
  return isEq(val, match);
}, function (val, match) {
  return _(_templateObject5(), val, match);
}];
module.exports.contains = [function (val, match) {
  return isEq(val, match, Object.keys(match));
}, function (val, match) {
  return _(_templateObject6(), val, match);
}];
module.exports.isTrue = [function (val) {
  return val === true;
}, function (val) {
  return _(_templateObject7(), val);
}];
module.exports.isFalse = [function (val) {
  return val === false;
}, function (val) {
  return _(_templateObject8(), val);
}];
module.exports.hasProp = [function (val, prop) {
  return val.hasOwnProperty(prop);
}, function (val, prop) {
  return _(_templateObject9(), val, prop);
}];
module.exports.hasPair = [function (val) {
  for (var _len = arguments.length, pair = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pair[_key - 1] = arguments[_key];
  }

  return isEq(val[pair[0]], pair[1]);
}, function (val) {
  for (var _len2 = arguments.length, pair = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    pair[_key2 - 1] = arguments[_key2];
  }

  return _(_templateObject10(), pair, val);
}];
module.exports.isPromise = [function (val) {
  return U.isPromise(val);
}, function (val) {
  return _(_templateObject11(), val);
}, {
  shouldCatch: true
}];
module.exports.resolvesTo = [function (val, thing) {
  return U.isPromise(val) ? val.then(function (x) {
    return x === thing ? Promise.resolve() : Promise.reject();
  }) : Promise.reject("".concat(val, " was not a Promise"));
}, function (val, thing) {
  return _(_templateObject12(), val, thing);
}];
module.exports.isType = [function (val, type) {
  return type === 'nil' && (val === 'null' || val === 'undefined') || _typeof(val) === type || Array.isArray(val) && type === "array" && val === null && type !== 'object';
}, function (val, type) {
  return _(_templateObject13(), val, type);
}];
module.exports.greaterThan = [function (val, compare) {
  return val > compare;
}, function (val, compare) {
  return _(_templateObject14(), val, compare);
}];
module.exports.lessThan = [function (val, compare) {
  return val < compare;
}, function (val, compare) {
  return _(_templateObject15(), val, compare);
}];
module.exports.gte = [function (val, compare) {
  return val >= compare;
}, function (val, compare) {
  return _(_templateObject16(), val, compare);
}];
module.exports.lte = [function (val, compare) {
  return val <= compare;
}, function (val, compare) {
  return _(_templateObject17(), val, compare);
}];
/* Convenience aliases */

module.exports.success = module.exports.done;
module.exports.succeed = module.exports.done;
module.exports.failure = module.exports.fail;
module.exports.equal = module.exports.equals;
module.exports.deepEqual = module.exports.deepEquals;
module.exports.match = module.exports.deepEquals;
module.exports.greaterThanOrEqualTo = module.exports.gte;
module.exports.lessThanOrEqualTo = module.exports.lte;