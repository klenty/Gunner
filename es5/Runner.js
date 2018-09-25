"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (f) {
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
        }g.Runner = f();
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
            module.exports = require('./src/runner');
        }, { "./src/runner": 10 }], 2: [function (require, module, exports) {
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
                    var type = typeof node_data === "undefined" ? "undefined" : _typeof(node_data);
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
                                ret.push(fn(v, 1, level + 1));
                                //entries that are values of an array are the only ones that can be special node descriptors
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
                                    if (_typeof(node_data.attrs) != 'object') {
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
                                }

                                //later attributes can be added here
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
                    if ((typeof options === "undefined" ? "undefined" : _typeof(options)) == 'object') {
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
            };
        }, {}], 3: [function (require, module, exports) {
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
        }, {}], 4: [function (require, module, exports) {
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
        }, {}], 5: [function (require, module, exports) {
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
        }, {}], 6: [function (require, module, exports) {
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
        }, { "./default": 5, "./min": 7, "./tap": 8, "./xunit": 9 }], 7: [function (require, module, exports) {
            var _require = require('../util/constants'),
                eventMap = _require.eventMap,
                eventVerbs = _require.eventVerbs;

            var _require2 = require('../util/nodeutils'),
                clear = _require2.clear;

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
                console.log(count[mapEvent] + " tests " + eventVerbs[mapEvent][2] + (" (total: " + count.collapse() + ")"));
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
                    console.log("Test suite " + results.name + " has done running.");
                    console.log('Success ratio:', results.successPercent, '%');
                });
            };

            module.exports = Min;
            module.exports.convert = convert;
        }, { "../util/constants": 11, "../util/nodeutils": 12 }], 8: [function (require, module, exports) {
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
        }, {}], 9: [function (require, module, exports) {
            var toXML = require('jsontoxml');

            var _require3 = require('../util/nodeutils'),
                clear = _require3.clear;

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
                                name: name,
                                tests: count,
                                success: success.length,
                                failures: failures.length,
                                skipped: skipped.length,
                                timestamp: new Date().toUTCString(),
                                time: results.duration / 1000 || 0
                            },
                            children: results.reduce(function (acc, r) {
                                var content = r.status !== 'ok' && (r.status === 'skip' ? 'skipped' : {
                                    name: 'failure',
                                    text: r.reason ? r.reason && r.reason.stack : ''
                                });
                                acc.push(_extends({
                                    name: 'testcase',
                                    attrs: {
                                        name: r.description,
                                        time: r.duration / 1000 || 0
                                    }
                                }, (typeof content === "undefined" ? "undefined" : _typeof(content)) === 'object' && { text: content && content.stack }, (typeof content === "undefined" ? "undefined" : _typeof(content)) === 'object' && { children: [content] }));
                                return acc;
                            }, [])
                        };
                    })
                };
            };

            var convert = function convert(results) {
                return toXML(toJSON(results), { xmlHeader: { standalone: true } });
            };

            var xunit = function xunit(runner) {
                return runner.on("end", function (results) {
                    return clear(), console.log(convert([results]));
                });
            };

            module.exports = xunit;
            module.exports.convert = convert;
        }, { "../util/nodeutils": 12, "jsontoxml": 2 }], 10: [function (require, module, exports) {
            var reporters = require('../reporters');

            var isBrowser = new Function("try { return this === window } catch (e) { return false }");

            var runner = function runner(instances) {
                return function () {
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


                    if (isBrowser()) throw new Error('Runner is not adapted for browsers yet.' + ' Use regular Gunner');

                    instances = Array.isArray(instances) ? instances : [instances];

                    if (!instances.length) throw new Error("No instances were passed to Gunner Runner");

                    var type = instances[0].__proto__.constructor.name;

                    if (type !== "Gunner" && type !== "Strategy") throw new Error("Runner " + type + " is not one of Gunner or Strategy");

                    var RunInstances = instances.filter(function (i) {
                        return i.__proto__.constructor.name === type;
                    });

                    if (RunInstances.length !== instances.length) throw new Error("Not all instances were of type " + type);

                    var perf = { start: Date.now() };

                    return Promise.all(RunInstances.map(function (instance) {
                        return instance.run({ reporter: 'min' });
                    })).then(function (results) {
                        perf.end = Date.now();
                        results.start = perf.start.toUTCString();
                        results.end = perf.end.toUTCString();
                        results.duration = perf.end - perf.start;

                        return options.request ? _defineProperty({
                            default: results
                        }, options.request, reporters[options.request].convert(results)) : results;
                    });
                };
            };

            module.exports = runner;
        }, { "../reporters": 6 }], 11: [function (require, module, exports) {
            var _require4 = require('os'),
                EOL = _require4.EOL;

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
        }, { "os": 3 }], 12: [function (require, module, exports) {
            (function (process) {
                module.exports = {

                    clear: function clear() {

                        // clear screen
                        process.stdout.write("\x1B[2J");
                        // set cursor position to top
                        process.stdout.write("\x1B[1;1H");
                    }

                };
            }).call(this, require('_process'));
        }, { "_process": 4 }] }, {}, [1])(1);
});
