/**
 * Creates a Logger that only logs if 'log' option was true
 * @param {Object} options
 * @param {boolean=} options.log
 */
const logger = options => {
	const log = (...strings) => options.log && console.log(...strings);
	log.true = options.log;
	return log;
};

module.exports = {
	create: logger,
};
