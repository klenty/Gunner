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

	run () {
		return _runTests(this.tests)
		.then(results => {
			const success = results.filter(r => r.result === 'pass');
			const successPercent = Math.floor(success.length/results.length * 100);

			console.log(
				`\n${success.length} tests passed of ${results.length}`,
				`[${successPercent}% success]\n`
			);
			results.forEach(r => {
				console.log(`${r.result === 'pass' ? '✅' : '❌'} ::`,
					`${r.description}`,
					`${r.error ? `\n    Traceback:\n    ${stringify(r.error)}` : ''}`);
			});
			return results;
		});
	}

}

module.exports = Gunner;
module.exports.assert = _expect;
