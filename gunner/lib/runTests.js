'use strict';

const { pass, fail } = require('./constants');

const runTests = tests => Promise.all(tests.map(each => {
	const pred = each.test();
	return (Array.isArray(pred) ? Promise.all(pred) : pred)
	.then(() => ({ description: each.description, result: pass }))
	.catch(e => ({ description: each.description, result: fail, error: e }));
}));

module.exports = runTests;
