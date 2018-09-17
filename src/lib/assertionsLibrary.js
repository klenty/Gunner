const isEq = require('@codefeathers/iseq');
const U = require('../util');
const _ = U.taggedStringify;

module.exports.done =
	[
		() => true,
		() => null,
	];
module.exports.fail =
	[
		() => false,
		(_, rejection) => rejection,
	];
module.exports.exists =
	[
		val => typeof val !== 'undefined',
		() => `Value is undefined`
	];
module.exports.isArray =
	[
		val => Array.isArray(val),
		val => _`${(val)} is not an array`,
	];
module.exports.isObject =
	[
		val => typeof val === 'object' && val !== null,
		val => _`${val} is not an object`,
	];
module.exports.hasLength =
	[
		(val, l) => val.length === l,
		(val, l) => _`${val} doesn't have length ${l}`,
	];
module.exports.equals =
	[
		(val, thing) => val === thing,
		(val, thing) => _`${val} is not equal to ${thing}`
	];
module.exports.deepEquals =
	[
		(val, match) => isEq(val, match),
		(val, match) => _`${val} is not deeply equal to ${match}`,
	];
module.exports.contains =
	[
		(val, match) => isEq(val, match, Object.keys(match)),
		(val, match) => _`${val} does not contain ${match}`,
	];
module.exports.isTrue =
	[
		val => val === true,
		val => _`${val} is not true`
	];
module.exports.isFalse =
	[
		val => val === false,
		val => _`${val} is not false`
	];
module.exports.hasProp =
	[
		(val, prop) => val.hasOwnProperty(prop),
		(val, prop) => _`${val} does not have property '${prop}'`,
	];
module.exports.hasPair =
	[
		(val, ...pair) => isEq(val[pair[0]], pair[1]),
		(val, ...pair) => _`<${pair}> does not exist in ${val}`,
	];
module.exports.isPromise =
	[
		val => U.isPromise(val),
		val => _`${val} is not a promise`,
		{ shouldCatch: true },
	];
module.exports.resolvesTo =
	[
		(val, thing) => U.isPromise(val)
			? val.then(x => (x === thing)
				? Promise.resolve() : Promise.reject())
			: Promise.reject(`${val} was not a Promise`),
		(val, thing) => _`'${val}' does not resolve to '${thing}'`,
	];
module.exports.isType =
	[
		(val, type) => (type === 'nil'
			&& (val === 'null' || val === 'undefined'))
				|| (typeof val === type)
				|| (Array.isArray(val) && type === "array")
				&& (val === null && type !== 'object'),
		(val, type) => _`'${val}' is not of type '${type}'`,
	];
module.exports.greaterThan =
	[
		(val, compare) => val > compare,
		(val, compare) => _`'${val}' is not greater than ${compare}`,
	];
module.exports.lessThan =
	[
		(val, compare) => val < compare,
		(val, compare) => _`'${val}' is not less than ${compare}`
	];
module.exports.gte =
	[
		(val, compare) => val >= compare,
		(val, compare) => _`'${val}' is less than ${compare}`
	];
module.exports.lte =
	[
		(val, compare) => val <= compare,
		(val, compare) => _`'${val}' is greater than ${compare}`,
	];

/* Convenience aliases */
module.exports.success = module.exports.done;
module.exports.succeed = module.exports.done;
module.exports.failure = module.exports.fail;
module.exports.equal = module.exports.equals;
module.exports.deepEqual = module.exports.deepEquals;
module.exports.match = module.exports.deepEquals;
module.exports.greaterThanOrEqualTo = module.exports.gte;
module.exports.lessThanOrEqualTo = module.exports.lte;
