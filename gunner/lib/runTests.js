'use strict';

const { isPromise } = require('../../util/helpers');
const { pass, fail } = require('./constants');

const runTests = instance => {

	const beforeAll = () => Promise.map(
		instance.__hooks__.before['@start'],
		hook => hook.run(),
	);

	const beforeEvery = () => Promise.mapSeries(
		instance.__hooks__.before['*'] || [],
		hook => hook.run(),
	);

	const runner = () => Promise.mapSeries(instance.__tests__, each => {

		const beforeThis = () => Promise.mapSeries(
			instance.__hooks__.before[each.description] || [],
			hook => hook.run(),
		);

		const afterThis = () => Promise.mapSeries(
			instance.__hooks__.after[each.description] || [],
			hook => hook.run(),
		);

		return beforeEvery().then(() => beforeThis()).then(() => {

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

		})
		.then(result => afterThis().then(() => result));

	});

	const afterAll = () => Promise.mapSeries(
		instance.__hooks__.before['@end'],
		hook => hook.run(),
	);

	return beforeAll()
	.then(() => runner())
	.then(results => afterAll().then(() => results));

};

module.exports = runTests;
