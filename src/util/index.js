const _stringify = require('json-stringify-safe');

const isObject = x => x && typeof x === 'object';

const stringify = obj =>
	isObject(obj)
		? (obj.stack || _stringify(obj))
		: obj;

/* Returns true if a promise is passed */
const isPromise = prom => prom && (typeof prom.then === 'function');

/* Lift a value or promise into a function */
const liftPromise = (fn, thing) =>
	isPromise(thing)
		? thing.then(fn)
		: fn(thing);

module.exports = {

	/* Returns true if an object is passed */
	isObject,

	/* Returns true if a promise is passed */
	isPromise,

	/* Lift a value or promise into a function */
	liftPromise,

	/* Returns the element found at the given path or undefined */
	path: obj =>
		path =>
			path.reduce((result, segment) => result && result[segment], obj),

	/* Pipe a value or promise through any number of unary functions */
	pipe: (...fns) =>
		arg => fns.reduce((acc, fn) =>
			liftPromise(fn, acc), arg),

	/* Flattens an array of arrays to an array */
	flatten : arrData => [].concat.apply([], arrData),

	/* Maps a function over an array */
	map : fn => x => x.map(fn),

	/* Filter an array using provided function */
	filter : fn => x => x.filter(fn),

	/* Returns identity */
	identity : x => x,

	/* Wraps a value in an object with given key */
	wrapWith : x => y => ({ [x] : y }),

	/* Unwraps a value from an object with given key */
	unwrapFrom : x => y => y[x],

	/* Resolves an array of Promises */
	promiseAll : x => Promise.all(x),

	/* Pass partial arguments and return a function that accepts the rest */
	partial: (fn, ...args) => (...rest) => fn(...args, ...rest),

	/* Item is in collection */
	isIn : (collection, item) => collection.indexOf(item) !== -1,

	/* Collection contains given path */
	containsPath : (collection, path) => collection.some(
		x => path.match(new RegExp(`/${x}/?$`))
	),

	/* Stringifies object or coerces to string */
	stringify,

	/* Tagged Stringify */
	taggedStringify: (strings, ...expr) => strings.reduce((acc, curr, i) =>
		acc + curr + (stringify(expr[i]) || ''), ''),

	/* Short circuits with given value on pred. Else calls function */
	short : (pred, shorter) =>
		fn => value => pred(value) ? shorter(value) : fn(value),

	/* Check if object has given property */
	hasProp : obj => prop => prop in obj,

};
