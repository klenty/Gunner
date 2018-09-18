"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(["", " is not an array"], ["", " is not an array"]),
    _templateObject2 = _taggedTemplateLiteral(["", " is not an object"], ["", " is not an object"]),
    _templateObject3 = _taggedTemplateLiteral(["", " doesn't have length ", ""], ["", " doesn't have length ", ""]),
    _templateObject4 = _taggedTemplateLiteral(["", " is not equal to ", ""], ["", " is not equal to ", ""]),
    _templateObject5 = _taggedTemplateLiteral(["", " is not deeply equal to ", ""], ["", " is not deeply equal to ", ""]),
    _templateObject6 = _taggedTemplateLiteral(["", " does not contain ", ""], ["", " does not contain ", ""]),
    _templateObject7 = _taggedTemplateLiteral(["", " is not true"], ["", " is not true"]),
    _templateObject8 = _taggedTemplateLiteral(["", " is not false"], ["", " is not false"]),
    _templateObject9 = _taggedTemplateLiteral(["", " does not have property '", "'"], ["", " does not have property '", "'"]),
    _templateObject10 = _taggedTemplateLiteral(["", " does not exist in ", ""], ["", " does not exist in ", ""]),
    _templateObject11 = _taggedTemplateLiteral(["", " is not a promise"], ["", " is not a promise"]),
    _templateObject12 = _taggedTemplateLiteral(["'", "' does not resolve to '", "'"], ["'", "' does not resolve to '", "'"]),
    _templateObject13 = _taggedTemplateLiteral(["'", "' is not of type '", "'"], ["'", "' is not of type '", "'"]),
    _templateObject14 = _taggedTemplateLiteral(["'", "' is not greater than ", ""], ["'", "' is not greater than ", ""]),
    _templateObject15 = _taggedTemplateLiteral(["'", "' is not less than ", ""], ["'", "' is not less than ", ""]),
    _templateObject16 = _taggedTemplateLiteral(["'", "' is less than ", ""], ["'", "' is less than ", ""]),
    _templateObject17 = _taggedTemplateLiteral(["'", "' is greater than ", ""], ["'", "' is greater than ", ""]);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (f) {
	if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.Gunner = f();
	}
})(function () {
	var define, module, exports;return function () {
		function r(e, n, t) {
			function o(i, f) {
				if (!n[i]) {
					if (!e[i]) {
						var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
					}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
						var n = e[i][1][r];return o(n || r);
					}, p, p.exports, r, e, n, t);
				}return n[i].exports;
			}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
				o(t[i]);
			}return o;
		}return r;
	}()({ 1: [function (require, module, exports) {
			module.exports = require('../src/gunner');
		}, { "../src/gunner": 9 }], 2: [function (require, module, exports) {
			(function (global) {
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
									var l = n[o] = { exports: {} };
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
							}return s;
						}
						return e;
					}()({
						1: [function (require, module, exports) {
							"use strict";

							var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
								return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
							} : function (obj) {
								return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
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
		}, {}], 3: [function (require, module, exports) {
			(function (global) {
				"use strict";
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				};function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}function _toConsumableArray(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}return arr2;
					} else {
						return Array.from(arr);
					}
				}(function (f) {
					if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
						module.exports = f();
					} else if (typeof define === "function" && define.amd) {
						define([], f);
					} else {
						var g;if (typeof window !== "undefined") {
							g = window;
						} else if (typeof global !== "undefined") {
							g = global;
						} else if (typeof self !== "undefined") {
							g = self;
						} else {
							g = this;
						}g.promiseObject = f();
					}
				})(function () {
					var define, module, exports;return function () {
						function r(e, n, t) {
							function o(i, f) {
								if (!n[i]) {
									if (!e[i]) {
										var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
									}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
										var n = e[i][1][r];return o(n || r);
									}, p, p.exports, r, e, n, t);
								}return n[i].exports;
							}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
								o(t[i]);
							}return o;
						}return r;
					}()({ 1: [function (require, module, exports) {
							module.exports = require("../index.js");
						}, { "../index.js": 2 }], 2: [function (require, module, exports) {
							"use strict";
							var isObject = function isObject(x) {
								return x && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && x.constructor === Object;
							};var $SELF = typeof Symbol !== "undefined" ? Symbol("SELF") : "[~~//-- SELF --//~~]";var makeCyclic = function makeCyclic(object, query) {
								var start = function start(obj) {
									return Object.keys(obj).reduce(function (acc, key) {
										var value = obj[key];if (value === query) {
											obj[key] = object;return [].concat(_toConsumableArray(acc), [key]);
										}if (isObject(value)) return [].concat(_toConsumableArray(acc), _toConsumableArray(start(value, query)));else return acc;
									}, []);
								};return start(object);
							};var PromiseMap = function PromiseMap(arr, functor) {
								return Promise.all(arr.map(function (x) {
									return Promise.resolve(x).then(functor);
								}));
							};var ResolveObject = function ResolveObject(obj) {
								return Promise.all(Object.keys(obj).map(function (key) {
									return Promise.resolve(obj[key]).then(function (val) {
										return obj[key] = val;
									});
								})).then(function (_) {
									return obj;
								});
							};var PromiseObject = function PromiseObject(object) {
								var shouldReplaceSelf = false;var ResolveDeepObject = function ResolveDeepObject(obj) {
									return Promise.resolve(obj).then(function (resolvedObject) {
										if (Array.isArray(resolvedObject)) {
											return PromiseMap(resolvedObject, function (obj) {
												return ResolveDeepObject(obj);
											});
										} else if (isObject(resolvedObject)) {
											return ResolveObject(Object.keys(resolvedObject).reduce(function (acc, key) {
												if (resolvedObject[key] === object) {
													shouldReplaceSelf = true;return _extends({}, acc, _defineProperty({}, key, $SELF));
												}return _extends({}, acc, _defineProperty({}, key, ResolveDeepObject(resolvedObject[key])));
											}, {}));
										}return resolvedObject;
									});
								};return ResolveDeepObject(object).then(function (obj) {
									if (shouldReplaceSelf) makeCyclic(obj, $SELF);return obj;
								});
							};module.exports = PromiseObject;
						}, {}] }, {}, [1])(1);
				});
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		}, { "../index.js": 4 }], 4: [function (require, module, exports) {
			"use strict";

			/**
    * Returns true if x is an object, false otherwise.
    * @param {any} x
    * @returns {Boolean}
    */

			var isObject = function isObject(x) {
				return x && (typeof x === "undefined" ? "undefined" : _typeof2(x)) === 'object' && x.constructor === Object;
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
							return [].concat(_toConsumableArray2(acc), [key]);
						};
						if (isObject(value)) return [].concat(_toConsumableArray2(acc), _toConsumableArray2(start(value, query)));else return acc;
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
									return _extends2({}, acc, _defineProperty2({}, key, $SELF));
								}
								return _extends2({}, acc, _defineProperty2({}, key, ResolveDeepObject(resolvedObject[key])));
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
		}, {}], 5: [function (require, module, exports) {}, {}], 6: [function (require, module, exports) {
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
			module.exports = EventEmitter;

			// Backwards-compat with node 0.10.x
			EventEmitter.EventEmitter = EventEmitter;

			EventEmitter.prototype._events = undefined;
			EventEmitter.prototype._maxListeners = undefined;

			// By default EventEmitters will print a warning if more than 10 listeners are
			// added to it. This is a useful default which helps finding memory leaks.
			var defaultMaxListeners = 10;

			var hasDefineProperty;
			try {
				var o = {};
				if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
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
			}

			// Obviously not all Emitters should be limited to 10. This function allows
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
			};

			// These standalone emit* functions are used to optimize calling of event
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
				if (events) doError = doError && events.error == null;else if (!doError) return false;

				// If there is no 'error' event listener then throw.
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
						}emitMany(handler, isFn, this, args);
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
						target.emit('newListener', type, listener.listener ? listener.listener : listener);

						// Re-assign `events` because a newListener handler could have caused the
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
					}

					// Check for listener leak
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
							}this.listener.apply(this.target, args);
					}
				}
			}

			function _onceWrap(target, type, listener) {
				var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
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
			};

			// Emits a 'removeListener' event if and only if the listener was removed.
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
				if (!events) return this;

				// not listening for removeListener, no need to emit
				if (!events.removeListener) {
					if (arguments.length === 0) {
						this._events = objectCreate(null);
						this._eventsCount = 0;
					} else if (events[type]) {
						if (--this._eventsCount === 0) this._events = objectCreate(null);else delete events[type];
					}
					return this;
				}

				// emit removeListener for all listeners on all events
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
			};

			// About 1.5x faster than the two-arg version of Array#splice().
			function spliceOne(list, index) {
				for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
					list[i] = list[k];
				}list.pop();
			}

			function arrayClone(arr, n) {
				var copy = new Array(n);
				for (var i = 0; i < n; ++i) {
					copy[i] = arr[i];
				}return copy;
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
				}return k;
			}
			function functionBindPolyfill(context) {
				var fn = this;
				return function () {
					return fn.apply(context, arguments);
				};
			}
		}, {}], 7: [function (require, module, exports) {
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
		}, {}], 8: [function (require, module, exports) {
			// shim for using process in browser
			var process = module.exports = {};

			// cached from whatever global is present so that test runners that stub it
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
				}
				// if setTimeout wasn't available but was latter defined
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
				}
				// if clearTimeout wasn't available but was latter defined
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
			};

			// v8 likes predictible objects
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
		}, {}], 9: [function (require, module, exports) {
			(function (process) {
				'use strict';

				var _require = require('./util'),
				    arrayOrPush = _require.arrayOrPush;

				var caller = require('./lib/caller');
				var emitter = require('./lib/emitter');
				var reporters = require('./reporters');
				var testrunner = require('./lib/testrunner');
				var expect = require('./lib/expect');

				var symbols = require('./util/symbols');

				var Gunner = function () {
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
							if (existing) throw new Error("Test '" + description + "' already exists!");

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

								return options.request ? (_ref = {}, _defineProperty2(_ref, options.request, reporters[options.request].convert(results)), _defineProperty2(_ref, "json", results), _ref) : results;
							});
						}
					}]);

					return Gunner;
				}();

				module.exports = Gunner;
				module.exports.expect = expect;
				module.exports.expectMany = expect.expectMany;
				module.exports.Start = symbols.Start;
				module.exports.End = symbols.End;
				module.exports.Gunner = module.exports;
			}).call(this, require('_process'));
		}, { "./lib/caller": 13, "./lib/emitter": 14, "./lib/expect": 15, "./lib/testrunner": 16, "./reporters": 18, "./util": 21, "./util/symbols": 22, "_process": 8 }], 10: [function (require, module, exports) {
			var _require2 = require('../util'),
			    isPromise = _require2.isPromise;

			var createRejectionStatement = function createRejectionStatement(statement) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				return Promise.reject(statement ? statement.apply(undefined, args) : '');
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
					return createRejectionStatement.apply(undefined, [statement].concat(_toConsumableArray2(args)));
				});

				return bool ? Promise.resolve() : createRejectionStatement.apply(undefined, [statement].concat(_toConsumableArray2(args)));
			};

			module.exports = assertPromise;
		}, { "../util": 21 }], 11: [function (require, module, exports) {
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
				return _(_templateObject, val);
			}];
			module.exports.isObject = [function (val) {
				return (typeof val === "undefined" ? "undefined" : _typeof2(val)) === 'object' && val !== null;
			}, function (val) {
				return _(_templateObject2, val);
			}];
			module.exports.hasLength = [function (val, l) {
				return val.length === l;
			}, function (val, l) {
				return _(_templateObject3, val, l);
			}];
			module.exports.equals = [function (val, thing) {
				return val === thing;
			}, function (val, thing) {
				return _(_templateObject4, val, thing);
			}];
			module.exports.deepEquals = [function (val, match) {
				return isEq(val, match);
			}, function (val, match) {
				return _(_templateObject5, val, match);
			}];
			module.exports.contains = [function (val, match) {
				return isEq(val, match, Object.keys(match));
			}, function (val, match) {
				return _(_templateObject6, val, match);
			}];
			module.exports.isTrue = [function (val) {
				return val === true;
			}, function (val) {
				return _(_templateObject7, val);
			}];
			module.exports.isFalse = [function (val) {
				return val === false;
			}, function (val) {
				return _(_templateObject8, val);
			}];
			module.exports.hasProp = [function (val, prop) {
				return val.hasOwnProperty(prop);
			}, function (val, prop) {
				return _(_templateObject9, val, prop);
			}];
			module.exports.hasPair = [function (val) {
				for (var _len2 = arguments.length, pair = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					pair[_key2 - 1] = arguments[_key2];
				}

				return isEq(val[pair[0]], pair[1]);
			}, function (val) {
				for (var _len3 = arguments.length, pair = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					pair[_key3 - 1] = arguments[_key3];
				}

				return _(_templateObject10, pair, val);
			}];
			module.exports.isPromise = [function (val) {
				return U.isPromise(val);
			}, function (val) {
				return _(_templateObject11, val);
			}, { shouldCatch: true }];
			module.exports.resolvesTo = [function (val, thing) {
				return U.isPromise(val) ? val.then(function (x) {
					return x === thing ? Promise.resolve() : Promise.reject();
				}) : Promise.reject(val + " was not a Promise");
			}, function (val, thing) {
				return _(_templateObject12, val, thing);
			}];
			module.exports.isType = [function (val, type) {
				return type === 'nil' && (val === 'null' || val === 'undefined') || (typeof val === "undefined" ? "undefined" : _typeof2(val)) === type || Array.isArray(val) && type === "array" && val === null && type !== 'object';
			}, function (val, type) {
				return _(_templateObject13, val, type);
			}];
			module.exports.greaterThan = [function (val, compare) {
				return val > compare;
			}, function (val, compare) {
				return _(_templateObject14, val, compare);
			}];
			module.exports.lessThan = [function (val, compare) {
				return val < compare;
			}, function (val, compare) {
				return _(_templateObject15, val, compare);
			}];
			module.exports.gte = [function (val, compare) {
				return val >= compare;
			}, function (val, compare) {
				return _(_templateObject16, val, compare);
			}];
			module.exports.lte = [function (val, compare) {
				return val <= compare;
			}, function (val, compare) {
				return _(_templateObject17, val, compare);
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
		}, { "../util": 21, "@codefeathers/iseq": 2 }], 12: [function (require, module, exports) {
			// Only imported for JSDoc
			/* eslint-disable-next-line */
			var Gunner = require('../gunner');
			var symbols = require('../util/symbols');

			var wrap = function wrap(type) {
				return function (unit) {
					return { type: type, unit: unit };
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
		}, { "../gunner": 9, "../util/symbols": 22 }], 13: [function (require, module, exports) {
			var _require3 = require('perf_hooks'),
			    performance = _require3.performance;

			var _require4 = require('../util'),
			    isPromise = _require4.isPromise;

			var caller = function caller(test, state) {

				var perf = { start: 0, end: 0 };

				var value = void 0,
				    error = void 0,
				    errored = void 0;
				try {
					perf.start = performance.now();
					value = test(state);
					perf.end = performance.now();
				} catch (e) {
					perf.end = performance.now();
					errored = true;
					error = e;
				}

				var promise = isPromise(value);

				if (promise) {
					return value.then(function (res) {
						return {
							duration: performance.now() - perf.start,
							status: 'ok',
							resolve: res,
							promise: true
						};
					}).catch(function (rej) {
						return {
							duration: performance.now() - perf.start,
							status: 'notOk',
							rejection: rej,
							promise: true
						};
					});
				} else {
					return Promise.resolve(_extends2({
						duration: perf.end - perf.start,
						status: errored ? 'notOk' : 'ok'
					}, !errored && { value: value }, errored && { error: error }, {
						promise: false
					}));
				}
			};

			module.exports = caller;
		}, { "../util": 21, "perf_hooks": 5 }], 14: [function (require, module, exports) {
			var EventEmitter = require('events');

			var GunnerEmitter = function (_EventEmitter) {
				_inherits(GunnerEmitter, _EventEmitter);

				function GunnerEmitter() {
					_classCallCheck(this, GunnerEmitter);

					return _possibleConstructorReturn(this, (GunnerEmitter.__proto__ || Object.getPrototypeOf(GunnerEmitter)).apply(this, arguments));
				}

				return GunnerEmitter;
			}(EventEmitter);

			module.exports = new GunnerEmitter();
		}, { "events": 6 }], 15: [function (require, module, exports) {
			'use strict';

			var _require5 = require('../util'),
			    liftPromise = _require5.liftPromise,
			    lowerCaseFirstLetter = _require5.lowerCaseFirstLetter;

			var library = require('./assertionsLibrary');
			var assertPromise = require('./assertPromise');

			var expectPromise = function expectPromise(pred, statement) {
				var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
				return function (toTest) {
					return function () {
						for (var _len4 = arguments.length, testValues = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
							testValues[_key4] = arguments[_key4];
						}

						return liftPromise(function (resolvedValue) {
							return assertPromise(pred.apply(undefined, [toTest].concat(testValues)), [statement, resolvedValue].concat(testValues));
						}, toTest).catch(function (rejectedValue) {
							return options.shouldCatch ? assertPromise(pred.apply(undefined, [toTest].concat(testValues)), [statement, rejectedValue].concat(testValues), { skipStatement: rejectedValue }) : Promise.reject(rejectedValue);
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
						var toCheck = args ? thing.apply(undefined, _toConsumableArray2(args)) : thing;
						if (expects.hasOwnProperty(prop)) return function () {
							return expects[prop](toCheck).apply(undefined, arguments);
						};else if (prop.slice(0, 3) === 'not') return function () {
							return negateP(expects[lowerCaseFirstLetter(prop.slice(3))](toCheck).apply(undefined, arguments));
						};else throw new Error('Unknown assertion method', prop);
					}
				});
			};

			var expectMany = function expectMany() {
				for (var _len5 = arguments.length, expects = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
					expects[_key5] = arguments[_key5];
				}

				return Promise.all(expects);
			};

			module.exports = expect;
			module.exports.expectMany = expectMany;
		}, { "../util": 21, "./assertPromise": 10, "./assertionsLibrary": 11 }], 16: [function (require, module, exports) {
			// Only imported for JSDoc
			/* eslint-disable-next-line */
			var Gunner = require('../gunner');
			Promise.object = require('@codefeathers/promise.object');

			var _require6 = require('perf_hooks'),
			    performance = _require6.performance;

			var _require7 = require('../util'),
			    last = _require7.last,
			    pipe = _require7.pipe,
			    pick = _require7.pick,
			    assignToObject = _require7.assignToObject;

			var buildTestQueue = require('./buildTestQueue');

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

				return startFailed !== -1 && 'A start hook failed\n' + skip[startFailed].error || everyFailed !== -1 && 'An every hook failed\n' + skip[everyFailed].error || beforeFailed !== -1 && 'A before test hook failed\n' + skip[beforeFailed].error;
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

							return toSkip ? { status: 'skip', description: toSkip } : item.unit.run(state);
						}).then(function (result) {
							var status = result.status,
							    duration = result.duration;


							if (item.type === '@test') {

								var resultObject = _extends2({
									status: status,
									duration: duration,
									description: item.unit.description
								}, (status === 'notOk' || status === 'skip') && { reason: result.error || result.rejection || result.description });
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
				}, { results: [], state: {}, skip: [] });
			};

			/**
    * runs the test suite
    * @param {Gunner} instance
    * @param {object} options
    */
			var testrunner = function testrunner(instance) {

				var perf = { start: performance.now() };

				return Promise.object(pipe(buildTestQueue, reduceQueue, pick('results'))(instance)).then(function (results) {
					results.duration = performance.now() - perf.start;
					return results;
				});
			};

			module.exports = testrunner;
		}, { "../gunner": 9, "../util": 21, "./buildTestQueue": 12, "@codefeathers/promise.object": 3, "perf_hooks": 5 }], 17: [function (require, module, exports) {
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
		}, {}], 18: [function (require, module, exports) {
			module.exports = {

				default: require('./default'),
				tap: require('./tap'),
				xunit: require('./xunit')

			};
		}, { "./default": 17, "./tap": 19, "./xunit": 20 }], 19: [function (require, module, exports) {
			var statusMap = {

				'ok': 'ok',
				'notOk': 'not ok',
				'skip': 'skip'

			};

			var convert = function convert(results, options) {
				return "\nTAP version 13\n" + (results.length ? '1' : 0) + ".." + results.length + "\n" + results.map(function (r, i) {

					var status = statusMap[r.status];
					var message = options.trace && r.reason && (r.reason.stack ? r.reason.stack : r.reason) || '';
					return status + " " + (i + 1) + " - " + r.description + (message && '\n  ---\n  message: |\n    ' + message + '\n  ---\n');
				}).join('\n') + "\n";
			};

			var TAP = function TAP(runner, options) {

				runner.on('end', function (results) {
					return console.log(convert(results, options));
				});
			};

			module.exports = TAP;
			module.exports.convert = convert;
		}, {}], 20: [function (require, module, exports) {
			var tag = function tag(name, attrs, close, content) {
				var end = close ? "/>" : ">";
				var pairs = [];
				var tag = void 0;

				Object.keys(attrs).forEach(function (key) {
					if (Object.prototype.hasOwnProperty.call(attrs, key)) {
						pairs.push(key + '="' + attrs[key] + '"');
					}
				});

				tag = "<" + name + (pairs.length ? " " + pairs.join(" ") : "") + end;
				if (content) {
					tag += content + "</" + name + end;
				}
				return new String(tag);
			};

			var convert = function convert(results) {
				var count = results.count,
				    success = results.success,
				    failures = results.failures,
				    skipped = results.skipped;


				return '<?xml version="1.0"?>' + tag('testsuites', {}, false, tag('testsuite', {
					name: results.name,
					tests: count,
					success: success.length,
					failures: failures.length,
					skipped: skipped.length,
					timestamp: new Date().toUTCString(),
					time: results.duration / 1000 || 0
				}, false, results.reduce(function (acc, r) {
					var close = r.status === 'ok';
					var content = r.status !== 'ok' && (r.status === 'skip' ? tag('skipped', {}, true) : tag('failure', {}, !r.reason, r.reason ? r.reason : ''));
					acc += tag('testcase', {
						name: r.description,
						time: r.duration / 1000 || 0
					}, close, content || '');
					return acc;
				}, '')));
			};

			var xunit = function xunit(runner) {
				runner.on("end", function (results) {

					console.log(convert(results));
				});
			};

			module.exports = xunit;
			module.exports.convert = convert;
		}, {}], 21: [function (require, module, exports) {
			var _stringify = require('json-stringify-safe');

			var isObject = function isObject(x) {
				return x && (typeof x === "undefined" ? "undefined" : _typeof2(x)) === 'object';
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
					for (var _len6 = arguments.length, fns = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
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
					for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
						args[_key7 - 1] = arguments[_key7];
					}

					return function () {
						for (var _len8 = arguments.length, rest = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
							rest[_key8] = arguments[_key8];
						}

						return fn.apply(undefined, args.concat(rest));
					};
				},

				/* Item is in collection */
				isIn: function isIn(collection, item) {
					return collection.indexOf(item) !== -1;
				},

				/* Collection contains given path */
				containsPath: function containsPath(collection, path) {
					return collection.some(function (x) {
						return path.match(new RegExp("/" + x + "/?$"));
					});
				},

				/* Stringifies object or coerces to string */
				stringify: stringify,

				/* Tagged Stringify */
				taggedStringify: function taggedStringify(strings) {
					for (var _len9 = arguments.length, expr = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
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
		}, { "json-stringify-safe": 7 }], 22: [function (require, module, exports) {
			module.exports = {

				Start: Symbol('Start'),
				End: Symbol('End'),

				expect: Symbol('expect'),

				pass: 'pass',
				fail: 'fail'

			};
		}, {}] }, {}, [1])(1);
});
