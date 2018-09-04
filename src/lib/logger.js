const chalk = require('chalk');
const { taggedStringify: _ } = require('../util');
const { EOL, greenLine, redLine } = require('../util/constants');

const processResults = (results, options) => {

	const success = results.filter(r => r.result === 'pass');
	results.passing = success.length;
	const successPercent = Math.floor(
		success.length/results.length * 100
	);
	let resultString = '';
	resultString +=
		chalk`\n{green ${success.length} }`
		+ `tests passed of ${results.length} `
		+ `[${successPercent}% success]\n`
		+ EOL;
	results.forEach(r => {
		const trace = (options.trace && r.error)
			? _`\n    Traceback:\n    ${r.error}`
			: '';

		resultString +=
			`${r.result === 'pass'
				? chalk`{green ✅}`
				: chalk`{red ❌}`} :: `
			+ `${r.description}`
			+ `${trace}`;
	});
	return resultString;

};

/**
 * Creates a Logger that only logs if 'log' option was true
 * @param {Object} options
 * @param {boolean=} options.log
 * @param {boolean=} shouldProcess
 */
const logger = (options = {}, shouldProcess) => {

	const log = (...items) => {

		if (!options.log) return;

		let logEmit;
		if (typeof options.log === 'function') {
			logEmit = (...x) => {
				console.log(...x);
				options.log(...x);
			};
		}
		else logEmit = console.log;

		if (!shouldProcess)
			logEmit(...items);
		else {

			const [ results ] = items;
			const success = results.filter(r => r.result === 'pass');
			const successPercent = Math.floor(
				success.length/results.length * 100
			);

			logEmit(processResults(results, options));

			const demarkerLine =
				successPercent === 100
					? greenLine
					: redLine;

			logEmit(
				EOL,
				demarkerLine,
				EOL, EOL,
				chalk.green(` ${success.length}`),
				`tests passed of ${results.length}`,
				`[${successPercent}% success]`,
				EOL, EOL,
				demarkerLine
			);

		}

	};

	log.true = options.log;
	return log;

};

module.exports = {
	create: logger,
};
