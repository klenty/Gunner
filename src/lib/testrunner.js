// Only imported for JSDoc
/* eslint-disable-next-line */
const Gunner = require('../gunner');
Promise.object = require('@codefeathers/promise.object');

const { last, pipe, pick, assignToObject } = require('../util');
const { eventMap } = require('../util/constants');

const emitter = require('./emitter');
const buildTestQueue = require('./buildTestQueue');

const findSkip = (skip, unit) => {

	const startFailed = skip.findIndex(x =>
		x.type === '@start');
	const everyFailed = skip.findIndex(x =>
		x.type === '@every');
	const beforeFailed = skip.findIndex(x =>
		x.description === unit.description);

	return (startFailed !== -1
			&& 'A start hook failed\n'
			+ skip[startFailed].error)
		|| (everyFailed !== -1
			&& 'An every hook failed\n'
			+ skip[everyFailed].error)
		|| (beforeFailed !== -1
			&& 'A before test hook failed\n'
			+ skip[beforeFailed].error);

};

const reduceQueue =
	queue => queue.reduce(
		(acc, item) =>
			Promise.resolve(acc)
			.then(acc => {

				return Promise.all([last(acc.results), Promise.object(acc.state)])
				.then(([, state]) => {

					const toSkip = findSkip(acc.skip, item.unit);
					return [toSkip, state];

				})
				.then(([toSkip, state]) => {

					return toSkip
						? { status: 'skip', description: toSkip }
						: item.unit.run(state);

				})
				.then(result => {

					const { status, duration } = result;

					if (item.type === '@test') {

						const resultObject = {
							status,
							duration,
							description: item.unit.description,
							...((status === 'notOk' || status === 'skip')
							&& {reason : result.error
								|| result.rejection
								|| result.description})
						};

						emitter.emit(
							eventMap[status],
							resultObject
						);

						acc.results.push(resultObject);

					} else {

						const identifier = (item.unit.label)
							|| (queue
							.filter(i => i.type === item.type)
							.filter(i => (i.unit.description
								=== item.unit.description))
							.length);

						const stateAddition =
							/* eslint-disable-next-line */
							status === 'ok'
								? result.promise ? result.resolve : result.value
								: null;

						if (identifier && stateAddition)
							assignToObject(
								acc.state, item.type
							)(identifier, stateAddition);

					}

					if (status === 'notOk') {

						acc.skip.push({
							type: item.type,
							description: item.unit.description,
							error: result.promise
								? result.rejection
								: result.error,
						});

					}

					return acc;

				});

			}),
		{ results: [], state: {}, skip: [] },
	);

/**
 * runs the test suite
 * @param {Gunner} instance
 * @param {object} options
 */
const testrunner = (instance) => {

	const perf = { start: Date.now() };

	return Promise.object(pipe(
		buildTestQueue,
		reduceQueue,
		pick('results'),
	)(instance)).then(results => {
		results.duration = Date.now() - perf.start;
		return results;
	});

};

module.exports = testrunner;
