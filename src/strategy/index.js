const Promise = require('bluebird');

const requireDeep = require('../util/requireDeep');
const Runner = require('../runner');

class Strategy {

	/**
	 * @param {string} name name for the Strategy
	 * @param {Array<Function>} resources array of resource creators
	 * @param {Function} compiler spec compiler for this Strategy
	 * @param {Object} runTimeOptions options to use when running Gunner
	 */
	constructor (name, resources, compiler, runTimeOptions) {
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
	createResource (name, resource) {
		return this.__resourceCreators[name](resource);
	}

	/**
	 * Fetches all specs that match provided options
	 * @param {Object} options
	 * @param {string} options.plans
	 * @param {Array<string>=} options.exclude
	 * @param {string|Array<string>=} options.pattern
	 */
	fetchSpecs (options) {
		this.__await__.push(Promise.map(requireDeep(options), each => {
			this.__gunnerInstances = this.compiler(this)(each);
		}));
		return this;
	}

	/**
	 * Adds a single spec to the strategy instance
	 * @param {Object} spec spec to add
	 */
	addSpec (spec) {
		this.__gunnerInstances.push(this.compiler(this)(spec));
		return this;
	}

	/**
	 * Starts running the gunner instances with the given options
	 * @param {Object=} options
	 */
	run (options) {
		const runOptions = options || this.__runTimeOptions;

		return Promise.all(this.__await__).then(() => (
			Runner(this.__gunnerInstances)(runOptions)));
	}

}

module.exports = Strategy;
