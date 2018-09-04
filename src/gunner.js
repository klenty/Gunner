'use strict';

const { EOL } = require('os');
const chalk = require('chalk');

const Promise = require('bluebird');
Promise.object = require('@codefeathers/promise.object');

const _runTests = require('./lib/runTests');
const _expect = require('./lib/expect');
const logger = require('./lib/logger');

const symbols = require('./util/symbols');

class Gunner {

	constructor (options = {}) {
		this.__hooks__ = {
			before: {
				[symbols.Start]: [],
				[symbols.End]: [],
				'*': [],
			},
			after: {
				[symbols.Start]: [],
				[symbols.End]: [],
				'*': [],
			},
		};
		this.__state__ = [];
		this.__tests__ = [];
		this.name = options.name;
	}

	test (description, test) {
		const existing = (
			this.__tests__
			.find(x => x.description === description)
		);
		if (existing)
			throw new Error(`Test '${description}' already exists!`);

		this.__tests__.push({
			description,
			test: state => {
				try {
					return test(_expect, state);
				} catch (e) {
					// If errors are thrown, reject them
					return Promise.reject(e);
				}
			},
		});

		return this;
	}

	before (description, run) {
		const hook = {
			description,
			run,
		};

		this.__hooks__.before[description]
			? this.__hooks__.before[description].push(hook)
			: this.__hooks__.before[description] = [ hook ];

		return this;
	}

	after (description, run) {
		const hook = {
			description,
			run,
		};

		this.__hooks__.after[description]
			? this.__hooks__.after[description].push(hook)
			: this.__hooks__.after[description] = [ hook ];

		return this;
	}

	run (options = {}) {
		return _runTests(this, options)
		.then(results => {
			const success = results.filter(r => r.result === 'pass');
			const successPercent = Math.floor(
				success.length/results.length * 100
			);

			const beforeAfterLine =
				successPercent === 100
					? chalk`{green ------------------------------------}`
					: chalk`{red ------------------------------------}`;

			const log = logger.create(options);
			log(
				EOL,
				beforeAfterLine,
				EOL, EOL,
				chalk`{green  ${success.length}}`,
				`tests passed of ${results.length}`,
				`[${successPercent}% success]`,
				EOL, EOL,
				beforeAfterLine
			);

			if((successPercent !== 100) && typeof process !== 'undefined')
				process.exitCode = 1;

			return results;
		})
		.then(results => {
			if (options.exit && typeof process !== 'undefined')
				process.exit();
			return results;
		});
	}

}

module.exports = Gunner;
module.exports.expect = _expect;
module.exports.Start = symbols.Start;
module.exports.End = symbols.End;
