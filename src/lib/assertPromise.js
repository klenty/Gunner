const { isPromise } = require('../util');

const _assertPromise = (bool, assertion) => {
	if(isPromise(bool))
		return bool.catch(() => Promise.reject(assertion));
	return bool ? Promise.resolve() : Promise.reject(assertion);
};

module.exports = _assertPromise;
