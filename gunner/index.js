'use strict';

const { log } = console;

Promise = require('bluebird');

const _runTests = require('./lib/runTests');
const _expect = require('./lib/expect');

const { stringify, hasProp } = require('../util/helpers');

class Gunner {

	constructor (options = {}) {
		this.__hooks__ = {
			before: {
				'@start': [],
				'@end': [],
				'*': [],
			},
			after: {
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
			test: () => {
				try {
					return test(_expect);
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
		const shouldLog = (hasProp(options)('log') && options.log) || !(hasProp(options)('log'));
		return _runTests(this)
		.then(results => {
			if (shouldLog) {
				const success = results.filter(r => r.result === 'pass');
				results.passing = success.length;
				const successPercent = Math.floor(success.length/results.length * 100);
				log(
					`\n${success.length} tests passed of ${results.length}`,
					`[${successPercent}% success]\n`
				);
				results.forEach(r => {
					const trace = (options.trace && r.error)
						? `\n    Traceback:\n    ${stringify(r.error)}`
						: '';

					log(`${r.result === 'pass' ? '✅' : '❌'} ::`,
						`${r.description}`,
						`${trace}`);
				});
			}

			return results;
		})
		.then(results => {
			if (options.exit) {
				if(results.passing < results.length)
					process.exit(1);
				process.exit(0);
			}
			return results;
		});
	}

}

module.exports = Gunner;
module.exports.expect = _expect;
