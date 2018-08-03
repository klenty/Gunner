module.exports = {

	/* Returns true if a promise is passed */
	isPromise : prom => prom && (typeof prom.then === 'function'),

	/* Flattens an array of arrays to an array */
	flatten : arrData => [].concat.apply([], arrData),

	/* Maps a function over an array */
	map : fn => x => x.map(fn),

	/* Returns identity */
	identity : x => x,

	/* Wraps a value in an object with given key */
	wrapWith : x => y => ({ [x] : y }),

	/* Unwraps a value from an object with given key */
	unwrapFrom : x => y => y[x],

	/* Resolves an array of Promises */
	promiseAll : x => Promise.all(x),

	/* Pipe a value or promise through any number of unary functions */
	pipe: (...fns) =>
		arg => fns.reduce((acc, fn) =>
			typeof acc.then === 'function'
				? acc.then(fn)
				: fn(acc), arg),

	/* Pass partial arguments and return a function that accepts the rest */
	partial: (fn, ...args) => (...rest) => fn(...args, ...rest),

	/* Item is in collection */
	isIn : (collection, item) => collection.indexOf(item) !== -1,

	/* Collection contains given path */
	containsPath : (collection, path) => collection.some(
		x => path.match(new RegExp(`/${x}/?$`))
	),

	/* Lift promises into a function */
	liftPromise : (fn, thing) =>
		typeof thing.then === 'function'
			? thing.then(fn)
			: fn(thing),

	/* Stringifies object or coerces to string */
	stringify : obj =>
		typeof obj === 'object'
			? (obj.stack || JSON.stringify(obj))
			: obj,

	/* Short circuits with given value on pred. Else calls function */
	short : (pred, shorter) =>
		fn => value => pred(value) ? shorter(value) : fn(value),

	/* Check if object has given property */
	hasProp : obj => prop => prop in obj,

};
