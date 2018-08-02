'use strict';

const { pass, fail } = require('../constants');

const runTests = tests => Promise.all(tests.map(test =>
	test.test()
	.then(() => ({ description: test.description, result: pass }))
	.catch(e => ({ description: test.description, result: fail, error: e }))
));

module.exports = runTests;
