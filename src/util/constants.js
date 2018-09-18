const { EOL } = require('os');

module.exports = {
	EOL,
	eventMap: {
		'ok': 'pass',
		'notOk': 'fail',
		'skip': 'skip',
	},
	eventVerbs: {
		pass: [ 'pass', 'passing', 'passed' ],
		fail: [ 'fail', 'failing', 'failed' ],
		skip: [ 'skip', 'skipping', 'skipped' ],
	},
};
