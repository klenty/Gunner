'use strict';

const { isPromise } = require('../../util/helpers');
const { pass, fail } = require('./constants');

const runTests = tests => Promise.all(tests.map(each => {

	const pred = each.test();

	/* There are 4 different cases at play:
		1. A plain expect() is returned.
		2. An array of [ expect() ] is returned
		3. A plain expect() is wrapped in a promise
		4. An array of [ expect() ] is wrapped in a promise.
		Here we normalise all of them into something we can process */

	if (!isPromise(pred) && !(pred && isPromise(pred[0])))
		throw new Error(`Malformed test '${each.description}'`);
	const toTest = Array.isArray(pred)
		? Promise.all(pred)
		: pred.then(x => Array.isArray(x) ? Promise.all(x) : x);

	return toTest
	.then(() => ({ description: each.description, result: pass }))
	.catch(e => ({ description: each.description, result: fail, error: e }));

}));

module.exports = runTests;
