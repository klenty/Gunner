const isEq = require('@codefeathers/iseq');

const { liftPromise, stringify, isPromise } = require('../../util/helpers');
const _assertPromise = require('./assertPromise');


const expectPromise = (pred, statement, options = {}) =>
	toTest =>
		(...testValues) =>
			liftPromise(
				resolvedValue => _assertPromise(
					pred(toTest, ...testValues),
					statement(resolvedValue, ...testValues),
				),
				toTest,
			)
			.catch(rejectedValue =>
				options.shouldCatch
					? _assertPromise(
						pred(toTest, ...testValues),
						statement(rejectedValue, ...testValues),
					)
					: Promise.reject(rejectedValue)
			);

const expect = thing => {

	return ({
		done : () => Promise.resolve(),
		equal : expectPromise(
			(a, b) => a === b,
			(a, b) => `${a} is not equal to ${b}`,
		)(thing),
		deepEqual : expectPromise(
			(a, b) => isEq(a, b),
			(a, b) => `${stringify(a)} is not deeply equal to ${stringify(b)}`,
		)(thing),
		isTrue : expectPromise(
			a => a === true,
			a => `${a} is not true`,
		)(thing),
		hasProp : expectPromise(
			(a, b) => b in a,
			(a, b) => `Property ${b} does not exist in ${stringify(a)}`,
		)(thing),
		hasPair : expectPromise(
			(a, b, c) => a[b] === c,
			(a, b, c) => `Pair <${b}, ${c}> does not exist in ${stringify(a)}`,
		)(thing),
		resolvesTo : expectPromise(
			(a, b) => isPromise(a)
				? a.then(x => x === b ? Promise.resolve() : Promise.reject())
				: Promise.reject(`${a} was not a Promise`),
			(a, b) => `${a} does not resolve to ${b}`,
		)(thing),
		isPromise : expectPromise(
			a => isPromise(a)
				? a.then(() => Promise.resolve()).catch(() => Promise.resolve())
				: Promise.reject(),
			a => `${a} is not a Promise`,
			{ shouldCatch: true },
		)(thing),
	});

};

module.exports = expect;
