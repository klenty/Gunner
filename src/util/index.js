const _stringify = require('json-stringify-safe');

const isObject = x => x && typeof x === 'object';

const stringify = obj =>
	isObject(obj)
		? (obj.stack || _stringify(obj))
		: obj;

const deepFlatten = arr => [].concat(
	...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

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

	/* Picks a key from an object */
	pick : key => obj => obj[key],

	/* Pipe a value or promise through any number of unary functions */
	pipe: (...fns) =>
		arg => fns.reduce((acc, fn) =>
			liftPromise(fn, acc), arg),

	/* Reduces an array */
	reduce : (fn, def) => arr => arr.reduce(fn, def),

	/* Flattens an array of arrays to an array */
	flatten : arrData => [].concat.apply([], arrData),

	/* Deep flattens arrays */
	deepFlatten,

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

	/* Fetches last element from list */
	last : arr => arr[arr.length - 1],

	/* Uppercases first letter of word */
	upperCaseFirstLetter : word =>
		word[0].toUpperCase()
		+ word.slice(1),

	/* Lowercases first letter of word */
	lowerCaseFirstLetter : word =>
		word[0].toLowerCase()
		+ word.slice(1),

	/* Creates an array or pushes to an existing one */
	arrayOrPush : (obj, key, item) =>
		Array.isArray(obj[key])
			? obj[key].push(item)
			: obj[key] = [item],

	/* Assigns to key or creates a new object */
	assignToObject : (obj, path) => (key, value) =>
		isObject(obj[path])
			? obj[path][key] = value
			: obj[path] = { [key]: value },

};
