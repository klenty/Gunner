const { log } = console;

const _runTests = require('./lib/runTests');
const _expect = require('./lib/expect');

const { stringify, hasProp } = require('../util/helpers');

class Gunner {

	constructor (options = {}) {
		this.tests = [];
		this.name = options.name;
	}

	test (description, test) {
		this.tests.push({
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
	}

	run (options = {}) {
		const shouldLog = (hasProp(options)('log') && options.log) || !(hasProp(options)('log'));
		return _runTests(this.tests)
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
