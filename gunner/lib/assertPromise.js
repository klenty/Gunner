const _assertPromise = (bool, assertion) => bool ? Promise.resolve() : Promise.reject(assertion);

module.exports = _assertPromise;
