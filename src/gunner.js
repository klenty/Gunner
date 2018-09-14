'use strict';

const { arrayOrPush } = require('./util');

const caller = require('./lib/caller');
const emitter = require('./lib/emitter');
const reporter = require('./reporters/default');
const testrunner = require('./lib/testrunner');
const expect = require('./lib/expect');

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
		(options.reporter || reporter)(emitter, options);

		emitter.emit('start');
		return testrunner(this, options)
		.then(results => {
			results.success = results.filter(r => r.status === 'ok');
			results.successPercent = Math.floor(
				results.success.length/results.length * 100
			);

			if((results.successPercent !== 100)
				&& typeof process !== 'undefined')
				process.exitCode = 1;
			emitter.emit('test end', results);
			emitter.emit('end', results);

			return results;
		});
	}

}

module.exports = Gunner;
module.exports.Gunner = Gunner;
module.exports.expect = expect;
module.exports.expectMany = expect.expectMany;
module.exports.Start = symbols.Start;
module.exports.End = symbols.End;
