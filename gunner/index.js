const isEq = require('@codefeathers/iseq');

const constants = {
	pass: 'pass',
	fail: 'fail',
};

const _assert = (bool, assertion) => bool ? Promise.resolve() : Promise.reject(assertion);

const stringify = obj =>
	typeof obj === 'object'
		? JSON.stringify(obj)
		: obj;

const be = a => {
	const fn = b => _assert(a === b, `${a} is not equal to ${b}`);
	fn.deepEqual = b => _assert(isEq(a, b), `${stringify(a)} is not deeply equal to ${stringify(b)}`);
	fn.true = () => _assert(a === true, `${a} is not true`);
	return fn;
};

const expect = thing => ({
	to: {
		be: be(thing),
	},
});

const runTests = tests => tests.map(test =>
	test.test()
	.then(() => ({ description: test.description, result: constants.pass }))
	.catch(e => ({ description: test.description, result: constants.fail, error: e }))
);

class Gunner {

	constructor () {
		this.tests = [];
	}

	test (description, test) {
		this.tests.push({
			description,
			test: () => test(expect),
		});
	}

	run () {
		return Promise.all(runTests(this.tests));
	}

}

module.exports = Gunner;
