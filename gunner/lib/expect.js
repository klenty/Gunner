const isEq = require('@codefeathers/iseq');

const { stringify } = require('../../util/helpers');
const _assertPromise = require('./assertPromise');

const expectPromise = (pred, statement, options = {}) => a => (...b) => {
	if(a && typeof a.then === 'function') {
		return (
			a
			.then(x =>
				_assertPromise(
					pred(a, ...b),
					statement(x, ...b)
				)
			)
			.catch(e =>
				options.shouldNotCatch
					? _assertPromise(
						pred(a, ...b),
						statement(e, ...b)
					)
					: Promise.reject(e)
			)
		);
	}
	return _assertPromise(
		pred(a, ...b),
		statement(a, ...b)
	);
};

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
			(a, b) => (a && typeof a.then === 'function')
				? a.then(x => x === b ? Promise.resolve() : Promise.reject())
				: Promise.reject(`${a} was not a Promise`),
			(a, b) => `${a} does not resolve to ${b}`,
		)(thing),
		isPromise : expectPromise(
			a => (a && typeof a.then === 'function')
				? a.then(() => Promise.resolve()).catch(() => Promise.resolve())
				: Promise.reject(),
			a => `${a} is not a Promise`,
			{ shouldNotCatch: true },
		)(thing),
	});

};

module.exports = expect;
