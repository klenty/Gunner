const { isPromise } = require('../util');

const createRejectionStatement = (statement, ...args) =>
	Promise.reject(statement ? statement(...args) : '');

const assertPromise = (bool, statementTuple, options = {}) => {

	let [ statement, ...args ] = statementTuple;
	statement = options.skipStatement ? () => options.skipStatement : statement;

	if(isPromise(bool))
		return bool.catch(() =>
			createRejectionStatement(statement, ...args));

	return bool
		? Promise.resolve()
		: createRejectionStatement(statement, ...args);

};

module.exports = assertPromise;
