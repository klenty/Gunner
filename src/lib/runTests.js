'use strict';

const { isPromise } = require('../util');
const constants = require('../util/symbols');

const runTests = instance => {

	const beforeAll = () => Promise.map(
		instance.__hooks__.before[constants.Start] || [],
		hook => hook.run(),
	);

	const beforeEvery = state => Promise.mapSeries(
		instance.__hooks__.before['*'] || [],
		hook => hook.run(state),
	);

	const runner = state => Promise.mapSeries(instance.__tests__, each => {

		const beforeThis = state => Promise.mapSeries(
			instance.__hooks__.before[each.description] || [],
			hook => hook.run(state),
		);

		const afterThis = state => Promise.mapSeries(
			instance.__hooks__.after[each.description] || [],
			hook => hook.run(state),
		);

		return beforeEvery(state)
		.then(newState => ({ ...state, '@every': newState }))
		.then(state => Promise.object({ ...state, '@this': beforeThis() }))
		.then(state => {

			const pred = each.test(state);

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

			return [
				state,
				toTest
				.then(() => ({ description: each.description, result: constants.pass }))
				.catch(e => ({ description: each.description, result: constants.fail, error: e })),
			];

		})
		.spread((state, result) => afterThis(state).then(() => result));

	});

	const afterAll = state => Promise.mapSeries(
		instance.__hooks__.before[constants.End] || [],
		hook => hook.run(state, state['@results']),
	);

	return Promise.object({ '@start': beforeAll() })
	.then(state => Promise.object({ ...state, '@results': runner(state)}))
	.then(state => Promise.object({ ...state, '@end': afterAll(state) }))
	.then(state => state['@results']);

};

module.exports = runTests;
