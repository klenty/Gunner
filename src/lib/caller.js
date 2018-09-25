const { isPromise } = require('../util');

const caller = (test, state) => {

	const perf = { start: 0, end: 0 };

	let value, error, errored;
	try {
		perf.start = new Date();
		value = test(state);
		perf.end = new Date();
	} catch (e) {
		perf.end = new Date();
		errored = true;
		error = e;
	}

	const promise = isPromise(value);

	if (promise) {
		return value
		.then(res => ({
			duration: new Date() - perf.start,
			status: 'ok',
			resolve: res,
			promise: true
		}))
		.catch(rej => ({
			duration: new Date() - perf.start,
			status: 'notOk',
			rejection: rej,
			promise: true
		}));
	} else {
		return Promise.resolve({
			duration: perf.end - perf.start,
			status: errored ? 'notOk' : 'ok',
			...(!errored && { value }),
			...(errored && { error }),
			promise: false,
		});
	}

};

module.exports = caller;
