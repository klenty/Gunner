'use strict';

const chalk = require('chalk');

const logger = require('./logger');
const { isPromise, taggedStringify: _ } = require('../util');
const constants = require('../util/symbols');

const snipStack = e => {

	if (e.stack)
		e.stack = e.stack
		.split('\n')
		.reduceRight(
			(acc, x) =>
				/* eslint-disable-next-line */
				acc.done
					? acc.cur
					: x.match(/at Object\.test.*\/src\/gunner\.js/)
						? { cur: x, done: true }
						: { cur: [x, acc.cur].join('\n') },
			{ cur: '' })
		.cur.trim();

	return e;

};

const runTests = (instance, options) => {

	const log = logger.create(options);

	const beforeAll = () => Promise.map(
		[
			...instance.__hooks__.before[constants.Start] || [],
			...instance.__hooks__.after[constants.Start] || [],
		],
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
				.then(() => {
					log(
						`${chalk`{green ✅}`} :: `,
						`${each.description}`
					);
					return {
						description: each.description,
						result: constants.pass
					};
				})
				.catch(e => {
					const error = (e && e.stack) ? snipStack(e) : e;
					const trace = (options.trace && error)
						? `\n    Traceback:\n    ` + _`${error}`
						: '';
					log(
						`${chalk`{red ❌}`} :: `,
						`${each.description}`,
						`${trace}`
					);
					return {
						description: each.description,
						result: constants.fail,
						error,
					};
				}),
			];

		})
		.spread((state, result) => afterThis(state).then(() => result));

	});

	const afterAll = state => Promise.mapSeries(
		[
			...(instance.__hooks__.before[constants.End] || []),
			...(instance.__hooks__.after[constants.End] || []),
		],
		hook => hook.run(state, state['@results']),
	);

	return Promise.object({ '@start': beforeAll() })
	.then(state => Promise.object({ ...state, '@results': runner(state)}))
	.then(state => Promise.object({ ...state, '@end': afterAll(state) }))
	.then(state => state['@results']);

};

module.exports = runTests;
