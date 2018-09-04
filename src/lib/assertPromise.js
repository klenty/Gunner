const Promise = require('bluebird');
const { isPromise } = require('../util');

const createRejectionStatement = (statement, ...args) =>
	Promise.reject(statement ? statement(...args) : '');

const _assertPromise = (bool, statementTuple) => {
	const [ statement, ...args ] = statementTuple;
	if(isPromise(bool))
		return bool.catch(() =>
			createRejectionStatement(statement, ...args));
	return bool
		? Promise.resolve()
		: createRejectionStatement(statement, ...args);
};

module.exports = _assertPromise;
