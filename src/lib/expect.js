'use strict';

const { liftPromise, lowerCaseFirstLetter } = require('../util');

const library = require('./assertionsLibrary');
const assertPromise = require('./assertPromise');

const expectPromise = (pred, statement, options = {}) =>
	toTest =>
		(...testValues) =>
			liftPromise(
				resolvedValue => assertPromise(
					pred(toTest, ...testValues),
					[ statement, resolvedValue, ...testValues ],
				),
				toTest,
			)
			.catch(rejectedValue =>
				options.shouldCatch
					? assertPromise(
						pred(toTest, ...testValues),
						[ statement, rejectedValue, ...testValues ],
						{ skipStatement: rejectedValue },
					)
					: Promise.reject(rejectedValue)
			);

const expects = Object.keys(library).reduce((acc, e) => {

	const [ pred, statement, options ] = library[e];

	acc[e] = expectPromise(
		pred,
		statement,
		options,
	);

	return acc;

}, {});

const negateP = prom =>
	prom.then(Promise.reject, Promise.resolve);

const expect = (thing, args) =>
	new Proxy({}, {
		get: function (obj, prop) {
			const toCheck = args ? thing(...args) : thing;
			if (expects.hasOwnProperty(prop))
				return (...check) => expects[prop](toCheck)(...check);
			else if (prop.slice(0, 3) === 'not')
				return (...check) =>
					negateP(
						expects[
						lowerCaseFirstLetter(prop.slice(3))
						](toCheck)(...check)
					);
			else
				throw new Error('Unknown assertion method', prop);
		},
	});

const expectMany = Promise.all.bind(Promise);

module.exports = expect;
module.exports.expectMany = expectMany;
