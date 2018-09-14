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
			if (prop.slice(0, 3) === 'not')
				return (...check) =>
					negateP(
						expects[
						lowerCaseFirstLetter(prop.slice(3))
						](toCheck)(...check)
					);
			return (...check) => expects[prop](toCheck)(...check);
		},
	});

const expectMany = Promise.all.bind(Promise);

module.exports.expect = expect;
module.exports.expectMany = expectMany;
