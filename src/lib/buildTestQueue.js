// Only imported for JSDoc
/* eslint-disable-next-line */
const Gunner = require('../gunner');
const symbols = require('../util/symbols');

const wrap = type => unit => ({ type, unit });

/**
 * runs the test suite
 * @param {Gunner} instance
 */
const buildTestTree = instance => {

	const testQueue = [];

	Array.prototype.push.apply(testQueue,
		instance.__suite__.beforeHooks[symbols.Start].map(wrap('@start')));
	testQueue.push.apply(
		instance.__suite__.afterHooks[symbols.Start].map(wrap('@start')));

	instance.__suite__.tests.forEach(test => (

		Array.prototype.push.apply(testQueue,
			instance.__suite__.beforeHooks['*']
			.map(wrap('@every'))),
		Array.prototype.push.apply(testQueue,
			(instance.__suite__.beforeHooks[test.description] || [])
			.map(wrap('@this'))),
		testQueue.push(wrap('@test')(test)),
		Array.prototype.push.apply(testQueue,
			(instance.__suite__.afterHooks[test.description] || [])
			.map(wrap('@afterTest'))),
		Array.prototype.push.apply(testQueue,
			(instance.__suite__.afterHooks['*']).map(wrap('@afterEvery')))

	));

	testQueue.push.apply(
		instance.__suite__.beforeHooks[symbols.End]
		.map(wrap('@end')));
	testQueue.push.apply(
		instance.__suite__.afterHooks[symbols.End]
		.map(wrap(symbols.End)));

	return testQueue;

};

module.exports = buildTestTree;