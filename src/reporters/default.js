const statusMap = {

	'ok': [ 'ok', '✅' ],
	'notOk': [ 'notOk', '❌' ],
	'skip': [ 'skip', '⚠️' ],

};

const convert = x => x;

const Default = (runner, options) => {

	runner.on('start', () => console.log('Started tests'));

	runner.on('test end', results => {

		results.forEach(x => {

			const s = statusMap[x.status];

			console.log('>', s[0], s[1], x.description);
			(options.trace
			&& x.reason
			&& console.log('\n---\n\n', x.reason, '\n\n---\n'));

		});

	});

	runner.on('end', results => {

		console.log(
			results.success.length,
			'tests of',
			results.length,
			'passed'
		);
		console.log('Success ratio:', results.successPercent, '%');

	});

};

module.exports = Default;
module.exports.convert = convert;
