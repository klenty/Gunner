const { liftPromise } = require('../util');
const _assertPromise = require('./assertPromise');

const expectPromise = (pred, statement, options = {}) =>
	toTest =>
		(...testValues) =>
			liftPromise(
				resolvedValue => _assertPromise(
					pred(toTest, ...testValues),
					[ statement, resolvedValue, ...testValues ],
				),
				toTest,
			)
			.catch(rejectedValue =>
				options.shouldCatch
					? _assertPromise(
						pred(toTest, ...testValues),
						[ statement, rejectedValue, ...testValues ],
					)
					: Promise.reject(rejectedValue)
			);

const library = require('./assertionsLibrary');

const expects = Object.keys(library).reduce((acc, e) => {
	const [ pred, statement, options ] = library[e];

	acc[e] = expectPromise(
		pred,
		statement,
		options,
	);

	return acc;

}, {});

const expect = thing =>
	new Proxy({}, {
		get: function (obj, prop) {
			return expects[prop](thing);
		},
	});

module.exports = expect;
