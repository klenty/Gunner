'use strict';

const { arrayOrPush } = require('./util');

const caller = require('./lib/caller');
const emitter = require('./lib/emitter');
const reporters = require('./reporters');
const testrunner = require('./lib/testrunner');

const symbols = require('./util/symbols');

class Gunner {

	constructor (name) {
		this.name = name;
		this.__suite__ = {
			tests: [],
			beforeHooks: {
				[symbols.Start]: [],
				[symbols.End]: [],
				'*': [],
			},
			afterHooks: {
				[symbols.Start]: [],
				[symbols.End]: [],
				'*': [],
			}
		};
	}

	test (description, test) {
		const existing = (
			this.__suite__.tests
			.find(x => x.description === description)
		);
		if (existing)
			throw new Error(`Test '${description}' already exists!`);

		const unit = {
			description,
			type: 'test',
			run: state => caller(test, state),
		};
		this.__suite__.tests.push(unit);
		return this;
	}

	before (description, run, label) {
		const unit = {
			description,
			label,
			type: 'hook',
			run: state => caller(run, state),
		};
		arrayOrPush(this.__suite__.beforeHooks, description, unit);
		return this;
	}

	after (description, run, label) {
		const unit = {
			description,
			label,
			type: 'hook',
			run: state => caller(run, state),
		};
		arrayOrPush(this.__suite__.afterHooks, description, unit);
		return this;
	}

	run (options = {}) {

		if (options.reporter === true)
			reporters.default(emitter, options);
		else if (typeof options.reporter === 'function')
			options.reporter(emitter, options);
		else if (reporters[options.reporter])
			reporters[options.reporter](emitter, options);

		emitter.emit('start');
		return testrunner(this, options)
		.then(results => {
			results.count = results.length;
			results.success = results.filter(r => r.status === 'ok');
			results.failures = results.filter(r => r.status === 'notOk');
			results.skipped = results.filter(r => r.status === 'skip');
			results.successPercent = Math.floor(
				results.success.length/results.length * 100
			);

			results.name = this.name;

			if((results.successPercent !== 100)
				&& typeof process !== 'undefined')
				process.exitCode = 1;
			emitter.emit('test end', results);
			emitter.emit('end', results);

			return (options.request
				? {
					[options.request]:
						reporters[options.request].convert(results),
					default: results }
				: results);
		});
	}

}

const expect = require('./lib/expect');

module.exports = Gunner;
module.exports.expect = expect;
module.exports.expectMany = expect.expectMany;
module.exports.Start = symbols.Start;
module.exports.End = symbols.End;
module.exports.Gunner = module.exports;
