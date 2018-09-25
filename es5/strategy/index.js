"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var requireDeep = require('../util/requireDeep');

var Strategy =
/*#__PURE__*/
function () {
  /**
   * @param {string} name name for the Strategy
   * @param {Array<Function>} resources array of resource creators
   * @param {Function} compiler spec compiler for this Strategy
   * @param {Object} runTimeOptions options to use when running Gunner
   */
  function Strategy(name, resources, compiler, runTimeOptions) {
    _classCallCheck(this, Strategy);

    this.name = name;
    this.__resourceCreators = resources;
    this.__runTimeOptions = runTimeOptions;
    this.compiler = compiler;
    this.__await__ = [];
    this.__gunnerInstances = [];
    this.resources = {};
    this.specs = [];
  }
  /**
   * Creates a single resource
   * @param {string} name
   * @param {Object} resource
   */


  _createClass(Strategy, [{
    key: "createResource",
    value: function createResource(name, resource) {
      return this.__resourceCreators[name](resource);
    }
    /**
     * Fetches all specs that match provided options
     * @param {Object} options
     * @param {string} options.plans
     * @param {Array<string>=} options.exclude
     * @param {string|Array<string>=} options.pattern
     */

  }, {
    key: "fetchSpecs",
    value: function fetchSpecs(options) {
      var _this = this;

      this.__await__.push(requireDeep(options).then(function (required) {
        return required.map(function (each) {
          return _this.__gunnerInstances = _this.compiler(_this)(each);
        });
      }));

      return this;
    }
    /**
     * Adds a single spec to the strategy instance
     * @param {Object} spec spec to add
     */

  }, {
    key: "addSpec",
    value: function addSpec(spec) {
      this.__gunnerInstances.push(this.compiler(this)(spec));

      return this;
    }
    /**
     * Starts running the gunner instances with the given options
     * @param {Object=} options
     */

  }, {
    key: "run",
    value: function run(options) {
      var _this2 = this;

      var runOptions = options || this.__runTimeOptions;
      return Promise.all(this.__await__).then(function () {
        return _this2.__gunnerInstances.run(runOptions);
      });
    }
  }]);

  return Strategy;
}();

module.exports = Strategy;