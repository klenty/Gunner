"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["", " is not an array"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty2(target, key, source[key]); }); } return target; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray2(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.Gunner = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
        o(t[i]);
      }

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      module.exports = require('./src/Gunner');
    }, {
      "./src/Gunner": 10
    }],
    2: [function (require, module, exports) {
      (function (global) {
        (function (f) {
          if (_typeof2(exports) === "object" && typeof module !== "undefined") {
            module.exports = f();
          } else if (typeof define === "function" && define.amd) {
            define([], f);
          } else {
            var g;

            if (typeof window !== "undefined") {
              g = window;
            } else if (typeof global !== "undefined") {
              g = global;
            } else if (typeof self !== "undefined") {
              g = self;
            } else {
              g = this;
            }

            g.isEq = f();
          }
        })(function () {
          var define, module, exports;
          return function () {
            function e(t, n, r) {
              function s(o, u) {
                if (!n[o]) {
                  if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                  }

                  var l = n[o] = {
                    exports: {}
                  };
                  t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                  }, l, l.exports, e, t, n, r);
                }

                return n[o].exports;
              }

              var i = typeof require == "function" && require;

              for (var o = 0; o < r.length; o++) {
                s(r[o]);
              }

              return s;
            }

            return e;
          }()({
            1: [function (require, module, exports) {
              "use strict";

              var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return _typeof2(obj);
              } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
              };

              var isEq = function isEq(item1, item2, compareKeys) {
                if (item1 === item2) return true;
                if ((typeof item1 === "undefined" ? "undefined" : _typeof(item1)) !== (typeof item2 === "undefined" ? "undefined" : _typeof(item2))) return false;
                if (Array.isArray(item1) && !Array.isArray(item2) || Array.isArray(item2) && !Array.isArray(item1)) return false;

                if (typeof item1 === "number") {
                  if (isNaN(item1) && isNaN(item2)) return false;else return item1 === item2;
                }

                if (typeof item1 === "string" || typeof item1 === "boolean" || item1 === null || item1 === undefined) {
                  return item1 === item2;
                }

                if (item1 instanceof RegExp) return String(item1) === String(item2);
                if ((typeof item1 === "undefined" ? "undefined" : _typeof(item1)) !== "object" || (typeof item2 === "undefined" ? "undefined" : _typeof(item2)) !== "object") return item1 === item2;
                var item1Keys = Object.keys(item1);
                var item2Keys = Object.keys(item2);

                if (!compareKeys) {
                  compareKeys = item1Keys;

                  if (item1Keys.length !== item2Keys.length) {
                    return false;
                  }
                }

                if (!Array.isArray(compareKeys)) throw new Error("[isEq] third parameter should be an array of keys!");
                if (compareKeys.length === 0) return true;

                for (var KeyIndex in compareKeys) {
                  var Key = compareKeys[KeyIndex];

                  if (Array.isArray(item1[Key]) && Array.isArray(item2[Key])) {
                    Key = KeyIndex;
                  }

                  if (item1[Key] !== item2[Key]) {
                    if (_typeof(item1[Key] === "object") && _typeof(item2[Key] === "object") || Array.isArray(item1[Key]) && Array.isArray(item2[Key])) {
                      if (!isEq(item1[Key], item2[Key])) {
                        return false;
                      }
                    } else {
                      return false;
                    }
                  }
                }

                return true;
              };

              module.exports = isEq;
            }, {}]
          }, {}, [1])(1);
        });
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    3: [function (require, module, exports) {
      (function (global) {
        "use strict";

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        (function (f) {
          if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
            module.exports = f();
          } else if (typeof define === "function" && define.amd) {
            define([], f);
          } else {
            var g;

            if (typeof window !== "undefined") {
              g = window;
            } else if (typeof global !== "undefined") {
              g = global;
            } else if (typeof self !== "undefined") {
              g = self;
            } else {
              g = this;
            }

            g.promiseObject = f();
          }
        })(function () {
          var define, module, exports;
          return function () {
            function r(e, n, t) {
              function o(i, f) {
                if (!n[i]) {
                  if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                  }

                  var p = n[i] = {
                    exports: {}
                  };
                  e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r);
                  }, p, p.exports, r, e, n, t);
                }

                return n[i].exports;
              }

              for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
                o(t[i]);
              }

              return o;
            }

            return r;
          }()({
            1: [function (require, module, exports) {
              module.exports = require("../index.js");
            }, {
              "../index.js": 2
            }],
            2: [function (require, module, exports) {
              "use strict";

              var isObject = function isObject(x) {
                return x && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && x.constructor === Object;
              };

              var $SELF = typeof Symbol !== "undefined" ? Symbol("SELF") : "[~~//-- SELF --//~~]";

              var makeCyclic = function makeCyclic(object, query) {
                var start = function start(obj) {
                  return Object.keys(obj).reduce(function (acc, key) {
                    var value = obj[key];

                    if (value === query) {
                      obj[key] = object;
                      return [].concat(_toConsumableArray(acc), [key]);
                    }

                    if (isObject(value)) return [].concat(_toConsumableArray(acc), _toConsumableArray(start(value, query)));else return acc;
                  }, []);
                };

                return start(object);
              };

              var PromiseMap = function PromiseMap(arr, functor) {
                return Promise.all(arr.map(function (x) {
                  return Promise.resolve(x).then(functor);
                }));
              };

              var ResolveObject = function ResolveObject(obj) {
                return Promise.all(Object.keys(obj).map(function (key) {
                  return Promise.resolve(obj[key]).then(function (val) {
                    return obj[key] = val;
                  });
                })).then(function (_) {
                  return obj;
                });
              };

              var PromiseObject = function PromiseObject(object) {
                var shouldReplaceSelf = false;

                var ResolveDeepObject = function ResolveDeepObject(obj) {
                  return Promise.resolve(obj).then(function (resolvedObject) {
                    if (Array.isArray(resolvedObject)) {
                      return PromiseMap(resolvedObject, function (obj) {
                        return ResolveDeepObject(obj);
                      });
                    } else if (isObject(resolvedObject)) {
                      return ResolveObject(Object.keys(resolvedObject).reduce(function (acc, key) {
                        if (resolvedObject[key] === object) {
                          shouldReplaceSelf = true;
                          return _extends({}, acc, _defineProperty({}, key, $SELF));
                        }

                        return _extends({}, acc, _defineProperty({}, key, ResolveDeepObject(resolvedObject[key])));
                      }, {}));
                    }

                    return resolvedObject;
                  });
                };

                return ResolveDeepObject(object).then(function (obj) {
                  if (shouldReplaceSelf) makeCyclic(obj, $SELF);
                  return obj;
                });
              };

              module.exports = PromiseObject;
            }, {}]
          }, {}, [1])(1);
        });
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../index.js": 4
    }],
    4: [function (require, module, exports) {
      "use strict";
      /**
       * Returns true if x is an object, false otherwise.
       * @param {any} x
       * @returns {Boolean}
       */

      var isObject = function isObject(x) {
        return x && _typeof2(x) === 'object' && x.constructor === Object;
      };
      /* A well known Symbol. */


      var $SELF = typeof Symbol !== 'undefined' ? Symbol('SELF') : '[~~//-- SELF --//~~]';
      /**
       * Replaces values that match the query parameter
       * with a reference to the parent parameter.
       * @param {Object} object Object to make cyclic.
       * @param {any} query Query to match against.
       * @returns {Object}
       */

      var makeCyclic = function makeCyclic(object, query) {
        var start = function start(obj) {
          return Object.keys(obj).reduce(function (acc, key) {
            var value = obj[key];

            if (value === query) {
              obj[key] = object;
              return _toConsumableArray2(acc).concat([key]);
            }

            ;
            if (isObject(value)) return _toConsumableArray2(acc).concat(_toConsumableArray2(start(value, query)));else return acc;
          }, []);
        };

        return start(object);
      };
      /**
       * Promise.map polyfill.
       * @param {Array.<any>} arr Array of Promises.
       * @param {Function} functor Function to call resolved values.
       */


      var PromiseMap = function PromiseMap(arr, functor) {
        return Promise.all(arr.map(function (x) {
          return Promise.resolve(x).then(functor);
        }));
      };
      /**
       * Resolve a flat object's promises.
       * @param {Object}
       * @returns {Object}
       */


      var ResolveObject = function ResolveObject(obj) {
        return Promise.all(Object.keys(obj).map(function (key) {
          return Promise.resolve(obj[key]).then(function (val) {
            return obj[key] = val;
          });
        })).then(function (_) {
          return obj;
        });
      };
      /**
       * Recursively resolves deep objects with nested promises.
       * @param {Object} object Object or value to resolve.
       * @returns {Object} Resolved object.
       */


      var PromiseObject = function PromiseObject(object) {
        var shouldReplaceSelf = false;

        var ResolveDeepObject = function ResolveDeepObject(obj) {
          return Promise.resolve(obj).then(function (resolvedObject) {
            if (Array.isArray(resolvedObject)) {
              // Promise and map every item to recursively deep resolve.
              return PromiseMap(resolvedObject, function (obj) {
                return ResolveDeepObject(obj);
              });
            } else if (isObject(resolvedObject)) {
              return ResolveObject(Object.keys(resolvedObject).reduce(function (acc, key) {
                if (resolvedObject[key] === object) {
                  shouldReplaceSelf = true;
                  return _objectSpread({}, acc, _defineProperty2({}, key, $SELF));
                }

                return _objectSpread({}, acc, _defineProperty2({}, key, ResolveDeepObject(resolvedObject[key])));
              }, {}));
            }

            return resolvedObject;
          });
        };

        return ResolveDeepObject(object).then(function (obj) {
          // Replace $SELF with reference to obj
          if (shouldReplaceSelf) makeCyclic(obj, $SELF);
          return obj;
        });
      };

      module.exports = PromiseObject;
    }, {}],
    5: [function (require, module, exports) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      var objectCreate = Object.create || objectCreatePolyfill;
      var objectKeys = Object.keys || objectKeysPolyfill;
      var bind = Function.prototype.bind || functionBindPolyfill;

      function EventEmitter() {
        if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        }

        this._maxListeners = this._maxListeners || undefined;
      }

      module.exports = EventEmitter; // Backwards-compat with node 0.10.x

      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
      // added to it. This is a useful default which helps finding memory leaks.

      var defaultMaxListeners = 10;
      var hasDefineProperty;

      try {
        var o = {};
        if (Object.defineProperty) Object.defineProperty(o, 'x', {
          value: 0
        });
        hasDefineProperty = o.x === 0;
      } catch (err) {
        hasDefineProperty = false;
      }

      if (hasDefineProperty) {
        Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
          enumerable: true,
          get: function get() {
            return defaultMaxListeners;
          },
          set: function set(arg) {
            // check whether the input is a positive number (whose value is zero or
            // greater and not a NaN).
            if (typeof arg !== 'number' || arg < 0 || arg !== arg) throw new TypeError('"defaultMaxListeners" must be a positive number');
            defaultMaxListeners = arg;
          }
        });
      } else {
        EventEmitter.defaultMaxListeners = defaultMaxListeners;
      } // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.


      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
        this._maxListeners = n;
        return this;
      };

      function $getMaxListeners(that) {
        if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }

      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return $getMaxListeners(this);
      }; // These standalone emit* functions are used to optimize calling of event
      // handlers for fast cases because emit() itself often has a variable number of
      // arguments and can be deoptimized because of that. These functions always have
      // the same number of arguments and thus do not get deoptimized, so the code
      // inside them can execute faster.


      function emitNone(handler, isFn, self) {
        if (isFn) handler.call(self);else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);

          for (var i = 0; i < len; ++i) {
            listeners[i].call(self);
          }
        }
      }

      function emitOne(handler, isFn, self, arg1) {
        if (isFn) handler.call(self, arg1);else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);

          for (var i = 0; i < len; ++i) {
            listeners[i].call(self, arg1);
          }
        }
      }

      function emitTwo(handler, isFn, self, arg1, arg2) {
        if (isFn) handler.call(self, arg1, arg2);else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);

          for (var i = 0; i < len; ++i) {
            listeners[i].call(self, arg1, arg2);
          }
        }
      }

      function emitThree(handler, isFn, self, arg1, arg2, arg3) {
        if (isFn) handler.call(self, arg1, arg2, arg3);else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);

          for (var i = 0; i < len; ++i) {
            listeners[i].call(self, arg1, arg2, arg3);
          }
        }
      }

      function emitMany(handler, isFn, self, args) {
        if (isFn) handler.apply(self, args);else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);

          for (var i = 0; i < len; ++i) {
            listeners[i].apply(self, args);
          }
        }
      }

      EventEmitter.prototype.emit = function emit(type) {
        var er, handler, len, args, i, events;
        var doError = type === 'error';
        events = this._events;
        if (events) doError = doError && events.error == null;else if (!doError) return false; // If there is no 'error' event listener then throw.

        if (doError) {
          if (arguments.length > 1) er = arguments[1];

          if (er instanceof Error) {
            throw er; // Unhandled 'error' event
          } else {
            // At least give some kind of context to the user
            var err = new Error('Unhandled "error" event. (' + er + ')');
            err.context = er;
            throw err;
          }

          return false;
        }

        handler = events[type];
        if (!handler) return false;
        var isFn = typeof handler === 'function';
        len = arguments.length;

        switch (len) {
          // fast cases
          case 1:
            emitNone(handler, isFn, this);
            break;

          case 2:
            emitOne(handler, isFn, this, arguments[1]);
            break;

          case 3:
            emitTwo(handler, isFn, this, arguments[1], arguments[2]);
            break;

          case 4:
            emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
            break;
          // slower

          default:
            args = new Array(len - 1);

            for (i = 1; i < len; i++) {
              args[i - 1] = arguments[i];
            }

            emitMany(handler, isFn, this, args);
        }

        return true;
      };

      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
        events = target._events;

        if (!events) {
          events = target._events = objectCreate(null);
          target._eventsCount = 0;
        } else {
          // To avoid recursion in the case that type === "newListener"! Before
          // adding it to the listeners, first emit "newListener".
          if (events.newListener) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object

            events = target._events;
          }

          existing = events[type];
        }

        if (!existing) {
          // Optimize the case of one listener. Don't need the extra array object.
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] = prepend ? [listener, existing] : [existing, listener];
          } else {
            // If we've already got an array, just append.
            if (prepend) {
              existing.unshift(listener);
            } else {
              existing.push(listener);
            }
          } // Check for listener leak


          if (!existing.warned) {
            m = $getMaxListeners(target);

            if (m && m > 0 && existing.length > m) {
              existing.warned = true;
              var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' "' + String(type) + '" listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit.');
              w.name = 'MaxListenersExceededWarning';
              w.emitter = target;
              w.type = type;
              w.count = existing.length;

              if ((typeof console === "undefined" ? "undefined" : _typeof2(console)) === 'object' && console.warn) {
                console.warn('%s: %s', w.name, w.message);
              }
            }
          }
        }

        return target;
      }

      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;

          switch (arguments.length) {
            case 0:
              return this.listener.call(this.target);

            case 1:
              return this.listener.call(this.target, arguments[0]);

            case 2:
              return this.listener.call(this.target, arguments[0], arguments[1]);

            case 3:
              return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);

            default:
              var args = new Array(arguments.length);

              for (var i = 0; i < args.length; ++i) {
                args[i] = arguments[i];
              }

              this.listener.apply(this.target, args);
          }
        }
      }

      function _onceWrap(target, type, listener) {
        var state = {
          fired: false,
          wrapFn: undefined,
          target: target,
          type: type,
          listener: listener
        };
        var wrapped = bind.call(onceWrapper, state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }

      EventEmitter.prototype.once = function once(type, listener) {
        if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };

      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      }; // Emits a 'removeListener' event if and only if the listener was removed.


      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
        events = this._events;
        if (!events) return this;
        list = events[type];
        if (!list) return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0) this._events = objectCreate(null);else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0) return this;
          if (position === 0) list.shift();else spliceOne(list, position);
          if (list.length === 1) events[type] = list[0];
          if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (!events) return this; // not listening for removeListener, no need to emit

        if (!events.removeListener) {
          if (arguments.length === 0) {
            this._events = objectCreate(null);
            this._eventsCount = 0;
          } else if (events[type]) {
            if (--this._eventsCount === 0) this._events = objectCreate(null);else delete events[type];
          }

          return this;
        } // emit removeListener for all listeners on all events


        if (arguments.length === 0) {
          var keys = objectKeys(events);
          var key;

          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }

          this.removeAllListeners('removeListener');
          this._events = objectCreate(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (!events) return [];
        var evlistener = events[type];
        if (!evlistener) return [];
        if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }

      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };

      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };

      EventEmitter.listenerCount = function (emitter, type) {
        if (typeof emitter.listenerCount === 'function') {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };

      EventEmitter.prototype.listenerCount = listenerCount;

      function listenerCount(type) {
        var events = this._events;

        if (events) {
          var evlistener = events[type];

          if (typeof evlistener === 'function') {
            return 1;
          } else if (evlistener) {
            return evlistener.length;
          }
        }

        return 0;
      }

      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
      }; // About 1.5x faster than the two-arg version of Array#splice().


      function spliceOne(list, index) {
        for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
          list[i] = list[k];
        }

        list.pop();
      }

      function arrayClone(arr, n) {
        var copy = new Array(n);

        for (var i = 0; i < n; ++i) {
          copy[i] = arr[i];
        }

        return copy;
      }

      function unwrapListeners(arr) {
        var ret = new Array(arr.length);

        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }

        return ret;
      }

      function objectCreatePolyfill(proto) {
        var F = function F() {};

        F.prototype = proto;
        return new F();
      }

      function objectKeysPolyfill(obj) {
        var keys = [];

        for (var k in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, k)) {
            keys.push(k);
          }
        }

        return k;
      }

      function functionBindPolyfill(context) {
        var fn = this;
        return function () {
          return fn.apply(context, arguments);
        };
      }
    }, {}],
    6: [function (require, module, exports) {
      exports = module.exports = stringify;
      exports.getSerialize = serializer;

      function stringify(obj, replacer, spaces, cycleReplacer) {
        return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
      }

      function serializer(replacer, cycleReplacer) {
        var stack = [],
            keys = [];
        if (cycleReplacer == null) cycleReplacer = function cycleReplacer(key, value) {
          if (stack[0] === value) return "[Circular ~]";
          return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
        return function (key, value) {
          if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
          } else stack.push(value);

          return replacer == null ? value : replacer.call(this, key, value);
        };
      }
    }, {}],
    7: [function (require, module, exports) {
      //copyright Ryan Day 2010 <http://ryanday.org>, Joscha Feth 2013 <http://www.feth.com> [MIT Licensed]
      var element_start_char = "a-zA-Z_\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FFF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
      var element_non_start_char = "-.0-9\xB7\u0300-\u036F\u203F\u2040";
      var element_replace = new RegExp("^([^" + element_start_char + "])|^((x|X)(m|M)(l|L))|([^" + element_start_char + element_non_start_char + "])", "g");
      var not_safe_in_xml = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;

      var process_to_xml = function process_to_xml(node_data, options) {
        var makeNode = function makeNode(name, content, attributes, level, hasSubNodes) {
          var indent_value = options.indent !== undefined ? options.indent : "\t";
          var indent = options.prettyPrint ? '\n' + new Array(level).join(indent_value) : '';

          if (options.removeIllegalNameCharacters) {
            name = name.replace(element_replace, '_');
          }

          var node = [indent, '<', name, attributes || ''];

          if (content && content.length > 0 || options.html) {
            node.push('>');
            node.push(content);
            hasSubNodes && node.push(indent);
            node.push('</');
            node.push(name);
            node.push('>');
          } else {
            node.push('/>');
          }

          return node.join('');
        };

        return function fn(node_data, node_descriptor, level) {
          var type = _typeof2(node_data);

          if (Array.isArray ? Array.isArray(node_data) : node_data instanceof Array) {
            type = 'array';
          } else if (node_data instanceof Date) {
            type = 'date';
          }

          switch (type) {
            //if value is an array create child nodes from values
            case 'array':
              var ret = [];
              node_data.map(function (v) {
                ret.push(fn(v, 1, level + 1)); //entries that are values of an array are the only ones that can be special node descriptors
              });
              options.prettyPrint && ret.push('\n');
              return ret.join('');
              break;

            case 'date':
              // cast dates to ISO 8601 date (soap likes it)
              return node_data.toJSON ? node_data.toJSON() : node_data + '';
              break;

            case 'object':
              if (node_descriptor == 1 && node_data.name) {
                var content = [],
                    attributes = [];

                if (node_data.attrs) {
                  if (_typeof2(node_data.attrs) != 'object') {
                    // attrs is a string, etc. - just use it as an attribute
                    attributes.push(' ');
                    attributes.push(node_data.attrs);
                  } else {
                    for (var key in node_data.attrs) {
                      var value = node_data.attrs[key];
                      attributes.push(' ');
                      attributes.push(key);
                      attributes.push('="');
                      attributes.push(options.escape ? esc(value) : value);
                      attributes.push('"');
                    }
                  }
                } //later attributes can be added here


                if (typeof node_data.value != 'undefined') {
                  var c = '' + node_data.value;
                  content.push(options.escape && !node_data.noescape ? esc(c) : c);
                } else if (typeof node_data.text != 'undefined') {
                  var c = '' + node_data.text;
                  content.push(options.escape && !node_data.noescape ? esc(c) : c);
                }

                if (node_data.children) {
                  content.push(fn(node_data.children, 0, level + 1));
                }

                return makeNode(node_data.name, content.join(''), attributes.join(''), level, !!node_data.children);
              } else {
                var nodes = [];

                for (var name in node_data) {
                  nodes.push(makeNode(name, fn(node_data[name], 0, level + 1), null, level + 1));
                }

                options.prettyPrint && nodes.length > 0 && nodes.push('\n');
                return nodes.join('');
              }

              break;

            case 'function':
              return node_data();
              break;

            default:
              return options.escape ? esc(node_data) : '' + node_data;
          }
        }(node_data, 0, 0);
      };

      var xml_header = function xml_header(standalone) {
        var ret = ['<?xml version="1.0" encoding="utf-8"'];

        if (standalone) {
          ret.push(' standalone="yes"');
        }

        ret.push('?>');
        return ret.join('');
      };

      module.exports = function (obj, options) {
        var Buffer = this.Buffer || function Buffer() {};

        if (typeof obj == 'string' || obj instanceof Buffer) {
          try {
            obj = JSON.parse(obj.toString());
          } catch (e) {
            return false;
          }
        }

        var xmlheader = '';
        var docType = '';

        if (options) {
          if (_typeof2(options) == 'object') {
            // our config is an object
            if (options.xmlHeader) {
              // the user wants an xml header
              xmlheader = xml_header(!!options.xmlHeader.standalone);
            }

            if (typeof options.docType != 'undefined') {
              docType = '<!DOCTYPE ' + options.docType + '>';
            }
          } else {
            // our config is a boolean value, so just add xml header
            xmlheader = xml_header();
          }
        }

        options = options || {};
        var ret = [xmlheader, options.prettyPrint && docType ? '\n' : '', docType, process_to_xml(obj, options)];
        return ret.join('');
      };

      module.exports.json_to_xml = module.exports.obj_to_xml = module.exports;
      module.exports.escape = esc;

      function esc(str) {
        return ('' + str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(not_safe_in_xml, '');
      }

      module.exports.cdata = cdata;

      function cdata(str) {
        if (str) return "<![CDATA[" + str.replace(/]]>/g, '') + ']]>';
        return "<![CDATA[]]>";
      }

      ;
    }, {}],
    8: [function (require, module, exports) {
      exports.endianness = function () {
        return 'LE';
      };

      exports.hostname = function () {
        if (typeof location !== 'undefined') {
          return location.hostname;
        } else return '';
      };

      exports.loadavg = function () {
        return [];
      };

      exports.uptime = function () {
        return 0;
      };

      exports.freemem = function () {
        return Number.MAX_VALUE;
      };

      exports.totalmem = function () {
        return Number.MAX_VALUE;
      };

      exports.cpus = function () {
        return [];
      };

      exports.type = function () {
        return 'Browser';
      };

      exports.release = function () {
        if (typeof navigator !== 'undefined') {
          return navigator.appVersion;
        }

        return '';
      };

      exports.networkInterfaces = exports.getNetworkInterfaces = function () {
        return {};
      };

      exports.arch = function () {
        return 'javascript';
      };

      exports.platform = function () {
        return 'browser';
      };

      exports.tmpdir = exports.tmpDir = function () {
        return '/tmp';
      };

      exports.EOL = '\n';

      exports.homedir = function () {
        return '/';
      };
    }, {}],
    9: [function (require, module, exports) {
      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
    }, {}],
    10: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var _require = require('./util'),
            arrayOrPush = _require.arrayOrPush;

        var caller = require('./lib/caller');

        var emitter = require('./lib/emitter');

        var reporters = require('./reporters');

        var testrunner = require('./lib/testrunner');

        var symbols = require('./util/symbols');

        var Gunner =
        /*#__PURE__*/
        function () {
          function Gunner(name) {
            var _beforeHooks, _afterHooks;

            _classCallCheck(this, Gunner);

            this.name = name;
            this.__suite__ = {
              tests: [],
              beforeHooks: (_beforeHooks = {}, _defineProperty2(_beforeHooks, symbols.Start, []), _defineProperty2(_beforeHooks, symbols.End, []), _defineProperty2(_beforeHooks, '*', []), _beforeHooks),
              afterHooks: (_afterHooks = {}, _defineProperty2(_afterHooks, symbols.Start, []), _defineProperty2(_afterHooks, symbols.End, []), _defineProperty2(_afterHooks, '*', []), _afterHooks)
            };
          }

          _createClass(Gunner, [{
            key: "test",
            value: function test(description, _test) {
              var existing = this.__suite__.tests.find(function (x) {
                return x.description === description;
              });

              if (existing) throw new Error("Test '".concat(description, "' already exists!"));
              var unit = {
                description: description,
                type: 'test',
                run: function run(state) {
                  return caller(_test, state);
                }
              };

              this.__suite__.tests.push(unit);

              return this;
            }
          }, {
            key: "before",
            value: function before(description, _run, label) {
              var unit = {
                description: description,
                label: label,
                type: 'hook',
                run: function run(state) {
                  return caller(_run, state);
                }
              };
              arrayOrPush(this.__suite__.beforeHooks, description, unit);
              return this;
            }
          }, {
            key: "after",
            value: function after(description, _run2, label) {
              var unit = {
                description: description,
                label: label,
                type: 'hook',
                run: function run(state) {
                  return caller(_run2, state);
                }
              };
              arrayOrPush(this.__suite__.afterHooks, description, unit);
              return this;
            }
          }, {
            key: "run",
            value: function run() {
              var _this = this;

              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              if (options.reporter === true) reporters.default(emitter, options);else if (typeof options.reporter === 'function') options.reporter(emitter, options);else if (reporters[options.reporter]) reporters[options.reporter](emitter, options);
              emitter.emit('start');
              return testrunner(this, options).then(function (results) {
                var _ref;

                results.count = results.length;
                results.success = results.filter(function (r) {
                  return r.status === 'ok';
                });
                results.failures = results.filter(function (r) {
                  return r.status === 'notOk';
                });
                results.skipped = results.filter(function (r) {
                  return r.status === 'skip';
                });
                results.successPercent = Math.floor(results.success.length / results.length * 100);
                results.name = _this.name;
                if (results.successPercent !== 100 && typeof process !== 'undefined') process.exitCode = 1;
                emitter.emit('test end', results);
                emitter.emit('end', results);
                return options.request ? (_ref = {}, _defineProperty2(_ref, options.request, reporters[options.request].convert(results)), _defineProperty2(_ref, "default", results), _ref) : results;
              });
            }
          }]);

          return Gunner;
        }();

        var expect = require('./lib/expect');

        module.exports = Gunner;
        module.exports.expect = expect;
        module.exports.expectMany = expect.expectMany;
        module.exports.Start = symbols.Start;
        module.exports.End = symbols.End;
        module.exports.Gunner = module.exports;
      }).call(this, require('_process'));
    }, {
      "./lib/caller": 14,
      "./lib/emitter": 15,
      "./lib/expect": 16,
      "./lib/testrunner": 17,
      "./reporters": 19,
      "./util": 24,
      "./util/symbols": 26,
      "_process": 9
    }],
    11: [function (require, module, exports) {
      var _require2 = require('../util'),
          isPromise = _require2.isPromise;

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
          return createRejectionStatement.apply(void 0, [statement].concat(_toConsumableArray2(args)));
        });
        return bool ? Promise.resolve() : createRejectionStatement.apply(void 0, [statement].concat(_toConsumableArray2(args)));
      };

      module.exports = assertPromise;
    }, {
      "../util": 24
    }],
    12: [function (require, module, exports) {
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
        return _typeof2(val) === 'object' && val !== null;
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
        for (var _len2 = arguments.length, pair = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          pair[_key2 - 1] = arguments[_key2];
        }

        return isEq(val[pair[0]], pair[1]);
      }, function (val) {
        for (var _len3 = arguments.length, pair = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          pair[_key3 - 1] = arguments[_key3];
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
        return type === 'nil' && (val === 'null' || val === 'undefined') || _typeof2(val) === type || Array.isArray(val) && type === "array" && val === null && type !== 'object';
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
    }, {
      "../util": 24,
      "@codefeathers/iseq": 2
    }],
    13: [function (require, module, exports) {
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
    }, {
      "../Gunner": 10,
      "../util/symbols": 26
    }],
    14: [function (require, module, exports) {
      var _require3 = require('../util'),
          isPromise = _require3.isPromise;

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
    }, {
      "../util": 24
    }],
    15: [function (require, module, exports) {
      var EventEmitter = require('events');

      var GunnerEmitter =
      /*#__PURE__*/
      function (_EventEmitter) {
        _inherits(GunnerEmitter, _EventEmitter);

        function GunnerEmitter() {
          _classCallCheck(this, GunnerEmitter);

          return _possibleConstructorReturn(this, _getPrototypeOf(GunnerEmitter).apply(this, arguments));
        }

        return GunnerEmitter;
      }(EventEmitter);

      module.exports = new GunnerEmitter();
    }, {
      "events": 5
    }],
    16: [function (require, module, exports) {
      'use strict';

      var _require4 = require('../util'),
          liftPromise = _require4.liftPromise,
          lowerCaseFirstLetter = _require4.lowerCaseFirstLetter;

      var library = require('./assertionsLibrary');

      var assertPromise = require('./assertPromise');

      var expectPromise = function expectPromise(pred, statement) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return function (toTest) {
          return function () {
            for (var _len4 = arguments.length, testValues = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              testValues[_key4] = arguments[_key4];
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
            var toCheck = args ? thing.apply(void 0, _toConsumableArray2(args)) : thing;
            if (expects.hasOwnProperty(prop)) return function () {
              return expects[prop](toCheck).apply(void 0, arguments);
            };else if (prop.slice(0, 3) === 'not') return function () {
              return negateP(expects[lowerCaseFirstLetter(prop.slice(3))](toCheck).apply(void 0, arguments));
            };else throw new Error('Unknown assertion method', prop);
          }
        });
      };

      var expectMany = function expectMany() {
        for (var _len5 = arguments.length, expects = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          expects[_key5] = arguments[_key5];
        }

        return Promise.all(expects);
      };

      module.exports = expect;
      module.exports.expectMany = expectMany;
    }, {
      "../util": 24,
      "./assertPromise": 11,
      "./assertionsLibrary": 12
    }],
    17: [function (require, module, exports) {
      // Only imported for JSDoc

      /* eslint-disable-next-line */
      var Gunner = require('../Gunner');

      Promise.object = require('@codefeathers/promise.object');

      var _require5 = require('../util'),
          last = _require5.last,
          pipe = _require5.pipe,
          pick = _require5.pick,
          assignToObject = _require5.assignToObject;

      var _require6 = require('../util/constants'),
          eventMap = _require6.eventMap;

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
            return Promise.all([last(acc.results), Promise.object(acc.state)]).then(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  state = _ref3[1];

              var toSkip = findSkip(acc.skip, item.unit);
              return [toSkip, state];
            }).then(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  toSkip = _ref5[0],
                  state = _ref5[1];

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
    }, {
      "../Gunner": 10,
      "../util": 24,
      "../util/constants": 23,
      "./buildTestQueue": 13,
      "./emitter": 15,
      "@codefeathers/promise.object": 3
    }],
    18: [function (require, module, exports) {
      var statusMap = {
        'ok': ['ok', '✅'],
        'notOk': ['notOk', '❌'],
        'skip': ['skip', '⚠️']
      };

      var convert = function convert(x) {
        return x;
      };

      var Default = function Default(runner, options) {
        runner.on('start', function () {
          return console.log('Started tests');
        });
        runner.on('test end', function (results) {
          results.forEach(function (x) {
            var s = statusMap[x.status];
            console.log('>', s[0], s[1], x.description);
            options.trace && x.reason && console.log('\n---\n\n', x.reason, '\n\n---\n');
          });
        });
        runner.on('end', function (results) {
          console.log(results.success.length, 'tests of', results.length, 'passed');
          console.log('Success ratio:', results.successPercent, '%');
        });
      };

      module.exports = Default;
      module.exports.convert = convert;
    }, {}],
    19: [function (require, module, exports) {
      var def = require('./default');

      var tap = require('./tap');

      var xunit = require('./xunit');

      var min = require('./min');

      module.exports = {
        default: def,
        tap: tap,
        xunit: xunit,
        min: min
      };
    }, {
      "./default": 18,
      "./min": 20,
      "./tap": 21,
      "./xunit": 22
    }],
    20: [function (require, module, exports) {
      var _require7 = require('../util/constants'),
          eventMap = _require7.eventMap,
          eventVerbs = _require7.eventVerbs;

      var _require8 = require('../util/nodeutils'),
          clear = _require8.clear;

      var convert = function convert(x) {
        return x;
      };

      var count = {
        pass: 0,
        fail: 0,
        skip: 0,
        collapse: function collapse() {
          return this.pass + this.fail + this.skip;
        }
      };

      var doneHandler = function doneHandler(event) {
        clear();
        var mapEvent = eventMap[event.status];
        count[mapEvent]++;
        console.log("".concat(count[mapEvent], " tests ").concat(eventVerbs[mapEvent][2]) + " (total: ".concat(count.collapse(), ")"));
      };

      var Min = function Min(runner) {
        runner.on('start', function () {
          return console.log('Started tests');
        });
        runner.on('pass', doneHandler);
        runner.on('fail', doneHandler);
        runner.on('skip', doneHandler);
        runner.on('end', function (results) {
          clear();
          console.log("Test suite ".concat(results.name, " has done running."));
          console.log('Success ratio:', results.successPercent, '%');
        });
      };

      module.exports = Min;
      module.exports.convert = convert;
    }, {
      "../util/constants": 23,
      "../util/nodeutils": 25
    }],
    21: [function (require, module, exports) {
      var statusMap = {
        'ok': 'ok',
        'notOk': 'not ok',
        'skip': 'skip'
      };

      var convert = function convert(results, options) {
        return "\nTAP version 13\n".concat(results.length ? '1' : 0, "..").concat(results.length, "\n").concat(results.map(function (r, i) {
          var status = statusMap[r.status];
          var message = options.trace && r.reason && (r.reason.stack ? r.reason.stack : r.reason) || '';
          return "".concat(status, " ").concat(i + 1, " - ").concat(r.description) + (message && '\n  ---\n  message: |\n    ' + message + '\n  ---\n');
        }).join('\n'), "\n");
      };

      var TAP = function TAP(runner, options) {
        runner.on('end', function (results) {
          return console.log(convert(results, options));
        });
      };

      module.exports = TAP;
      module.exports.convert = convert;
    }, {}],
    22: [function (require, module, exports) {
      var toXML = require('jsontoxml');

      var _require9 = require('../util/nodeutils'),
          clear = _require9.clear;

      var escapeXML = function escapeXML(str) {
        return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      };

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
                name: escapeXML(name),
                tests: count,
                success: success.length,
                failures: failures.length,
                skipped: skipped.length,
                timestamp: new Date().toUTCString(),
                time: results.duration / 1000 || 0
              },
              children: results.reduce(function (acc, r) {
                var reason = r.reason ? r.reason.stack || r.reason : '';
                var content = r.status !== 'ok' && {
                  name: r.status === 'skip' ? 'skipped' : 'failure',
                  text: escapeXML(reason)
                };
                acc.push(_objectSpread({
                  name: 'testcase',
                  attrs: {
                    name: escapeXML(r.description),
                    time: r.duration / 1000 || 0
                  }
                }, _typeof2(content) === 'object' && {
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
    }, {
      "../util/nodeutils": 25,
      "jsontoxml": 7
    }],
    23: [function (require, module, exports) {
      var _require10 = require('os'),
          EOL = _require10.EOL;

      module.exports = {
        EOL: EOL,
        eventMap: {
          'ok': 'pass',
          'notOk': 'fail',
          'skip': 'skip'
        },
        eventVerbs: {
          pass: ['pass', 'passing', 'passed'],
          fail: ['fail', 'failing', 'failed'],
          skip: ['skip', 'skipping', 'skipped']
        }
      };
    }, {
      "os": 8
    }],
    24: [function (require, module, exports) {
      var _stringify = require('json-stringify-safe');

      var isObject = function isObject(x) {
        return x && _typeof2(x) === 'object';
      };

      var stringify = function stringify(obj) {
        return isObject(obj) ? obj.stack || _stringify(obj) : obj;
      };

      var deepFlatten = function deepFlatten(arr) {
        var _ref6;

        return (_ref6 = []).concat.apply(_ref6, _toConsumableArray2(arr.map(function (v) {
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
          for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            fns[_key6] = arguments[_key6];
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
            return _defineProperty2({}, x, y);
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
          for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            args[_key7 - 1] = arguments[_key7];
          }

          return function () {
            for (var _len8 = arguments.length, rest = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              rest[_key8] = arguments[_key8];
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
          for (var _len9 = arguments.length, expr = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
            expr[_key9 - 1] = arguments[_key9];
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
            return isObject(obj[path]) ? obj[path][key] = value : obj[path] = _defineProperty2({}, key, value);
          };
        }
      };
    }, {
      "json-stringify-safe": 6
    }],
    25: [function (require, module, exports) {
      (function (global) {
        module.exports = {
          clear: function clear() {
            if (typeof global === 'undefined' || typeof global.process === 'undefined' || typeof global.process.stdout === 'undefined') return;
            var process = global.process; // clear screen

            process.stdout.write("\x1B[2J"); // set cursor position to top

            process.stdout.write("\x1B[1;1H");
          }
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    26: [function (require, module, exports) {
      module.exports = {
        Start: Symbol('Start'),
        End: Symbol('End'),
        expect: Symbol('expect'),
        pass: 'pass',
        fail: 'fail'
      };
    }, {}]
  }, {}, [1])(1);
});
