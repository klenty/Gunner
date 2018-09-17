const statusMap = {

	'ok': 'ok',
	'notOk': 'not ok',
	'skip': 'skip',

};

const convert = (results, options) =>	`
TAP version 13
${results.length ? '1' : 0}..${results.length}
${
	results.map((r, i) => {

		const status = statusMap[r.status];
		const message = options.trace
			&& r.reason
			&& (r.reason.stack ? r.reason.stack : r.reason)
			|| '';
		return (`${status} ${i + 1} - ${r.description}`
			+ (message
				&& ('\n  ---\n  message: |\n    ' + message + '\n  ---\n')));
	}).join('\n')
}
`;

const TAP = (runner, options) => {

	runner.on('end',
		results => console.log(convert(results, options)));

};

module.exports = TAP;
module.exports.convert = convert;
