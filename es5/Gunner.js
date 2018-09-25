'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      beforeHooks: (_beforeHooks = {}, _defineProperty(_beforeHooks, symbols.Start, []), _defineProperty(_beforeHooks, symbols.End, []), _defineProperty(_beforeHooks, '*', []), _beforeHooks),
      afterHooks: (_afterHooks = {}, _defineProperty(_afterHooks, symbols.Start, []), _defineProperty(_afterHooks, symbols.End, []), _defineProperty(_afterHooks, '*', []), _afterHooks)
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
        return options.request ? (_ref = {}, _defineProperty(_ref, options.request, reporters[options.request].convert(results)), _defineProperty(_ref, "default", results), _ref) : results;
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