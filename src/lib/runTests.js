'use strict';

const Promise = require('bluebird');
Promise.object = require('@codefeathers/promise.object');
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

const unitReducer =
	(units = [], stateMark) =>
		(state = {}) =>
			units.reduce(
				(accumulator, unit) =>
					accumulator
					.then(thisState =>
						Promise.resolve(
							unit.run({ ...state, [stateMark]: thisState })
						)
						.then(newState =>
							[ ...thisState, newState ])),
				Promise.resolve(state[stateMark] || []),
			);

const runTests = (instance, options) => {

	const log = logger.create(options);

	const beforeAll = () =>
		unitReducer(
			[
				...(instance.__hooks__.before[constants.Start] || []),
				...(instance.__hooks__.after[constants.Start] || []),
			],
			'@start',
		)();

	const beforeEvery = state =>
		unitReducer(
			instance.__hooks__.before['*'],
			'@every',
		)(state);

	const runner = state => Promise.mapSeries(instance.__tests__, each => {

		const beforeThis =
			unitReducer(
				instance.__hooks__.before[each.description],
				'@this'
			);

		const afterThis =
			unitReducer(
				instance.__hooks__.after[each.description],
				'@afterThis'
			);

		return Promise.object({ ...state, '@every': beforeEvery(state) })
		.then(state => Promise.object({ ...state, '@this': beforeThis(state) }))
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

			return ([
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
			]);

		})
		.then(([state, result]) => afterThis(state).then(() => result));

	});

	const afterAll =
		unitReducer(
			[
				...(instance.__hooks__.before[constants.End] || []),
				...(instance.__hooks__.after[constants.End] || []),
			],
			'@after-all',
		);

	return Promise.object({ '@start': beforeAll() })
	.then(state => Promise.object({ ...state, '@results': runner(state)}))
	.then(state => Promise.object({ ...state, '@end': afterAll(state) }))
	.then(state => state['@results']);

};

module.exports = runTests;
