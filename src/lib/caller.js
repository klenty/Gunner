const { isPromise } = require('../../util');

const caller = (test, state) => {

	let value, error, errored;
	try {
		value = test(state);
	} catch (e) {
		errored = true;
		error = e;
	}

	const promise = isPromise(value);

	if (promise) {
		return value
		.then(res => ({ status: 'ok', resolve: res, promise: true }))
		.catch(rej => ({ status: 'notOk', rejection: rej, promise: true }));
	} else {
		return Promise.resolve({
			status: errored ? 'notOk' : 'ok',
			...(!errored && { value }),
			...(errored && { error }),
			promise: false,
		});
	}

};

module.exports = caller;
