const { log } = console;

const _runTests = require('./lib/runTests');
const _expect = require('./lib/expect');

const { stringify } = require('../util/helpers');

class Gunner {

	constructor () {
		this.tests = [];
	}

	test (description, test) {
		this.tests.push({
			description,
			test: () => test(_expect),
		});
	}

	run (options = {}) {
		process.stdout.write(`Running ${this.tests.length} tests...`);
		return _runTests(this.tests)
		.then(results => {
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			const success = results.filter(r => r.result === 'pass');
			const successPercent = Math.floor(success.length/results.length * 100);

			if (('log' in options && options.log) || !('log' in options)) {
				log(
					`\n${success.length} tests passed of ${results.length}`,
					`[${successPercent}% success]\n`
				);
				results.forEach(r => {
					log(`${r.result === 'pass' ? '✅' : '❌'} ::`,
						`${r.description}`,
						`${options.stack ?
							r.error
								? `\n    Traceback:\n    ${stringify(r.error)}`
								: ''
							: ''}`);
				});
			}

			return results;
		});
	}

}

module.exports = Gunner;
module.exports.expect = _expect;
