'use strict';

const { arrayOrPush } = require('./util');
const caller = require('./lib/caller');

const testrunner = require('./lib/testrunner');
const { expect, expectMany } = require('./lib/expect');

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
		return testrunner(this, options)
		.then(results => {
			const success = results.filter(r => r.status === 'ok');
			const successPercent = Math.floor(
				success.length/results.length * 100
			);

			if((successPercent !== 100) && typeof process !== 'undefined')
				process.exitCode = 1;

			return results;
		});
	}

}

module.exports = Gunner;
module.exports.Gunner = Gunner;
module.exports.expect = expect;
module.exports.expectMany = expectMany;
module.exports.Start = symbols.Start;
module.exports.End = symbols.End;
