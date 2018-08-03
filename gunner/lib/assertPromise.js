const _assertPromise = (bool, assertion) => {
	if(bool && typeof bool.then === 'function') return bool.catch(() => Promise.reject(assertion));
	return bool ? Promise.resolve() : Promise.reject(assertion);
};

module.exports = _assertPromise;
