const isEq = require('@codefeathers/iseq');

const { liftPromise, stringify } = require('../../util/helpers');
const _assertPromise = require('./assertPromise');

const expect = a => {

	return ({
		done : () => Promise.resolve(),
		equal : (b) =>
			liftPromise(
				x => _assertPromise(
					x === b,
					`${a} is not equal to ${b}`),
				a),
		deepEqual : b =>
			liftPromise(
				x => _assertPromise(
					isEq(x, b),
					`${stringify(a)} is not deeply equal to ${stringify(b)}`,
					a),
				a),
		isTrue : () =>
			liftPromise(
				x => _assertPromise(
					x === true,
					`${a} is not true`),
				a),
	});
};

module.exports = expect;
