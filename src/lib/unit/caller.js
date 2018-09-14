const { isPromise } = require('../../util');

const caller = (test, state) => {

	let value, error;
	try {
		value = test(state);
	} catch (e) {
		error = e;
	}

	const promise = isPromise(value);

	if (promise) {
		return value
		.then(res => ({ resolve: res, promise: true }))
		.catch(rej => ({ rejection: rej, promise: true }));
	} else {
		return Promise.resolve({
			...(!error && {value}),
			...(error && {error}),
			promise: false,
		});
	}

};

module.exports = caller;
