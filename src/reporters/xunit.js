const toXML = require('jsontoxml');

const toJSON = resultsArray => {

	return {
		testsuites: resultsArray.map(results => {

			const { name, count, success, failures, skipped } = results;

			return {
				name: 'testsuite',
				attrs: {
					name,
					tests: count,
					success: success.length,
					failures: failures.length,
					skipped: skipped.length,
					timestamp: new Date().toUTCString(),
					time: (results.duration / 1000) || 0,
				},
				children: results.reduce((acc, r) => {
					const content = r.status !== 'ok' &&
						(r.status === 'skip'
							? 'skipped'
							: {
								name: 'failure',
								text: r.reason
									? (r.reason && r.reason.stack) : ''
							});
					acc.push({
						name: 'testcase',
						attrs: {
							name: r.description,
							time: (r.duration / 1000) || 0,
						},
						...(typeof content === 'object'
							&& { text: content && content.stack }),
						...(typeof content === 'object'
							&& { children: [ content ]}),
					});
					return acc;
				}, []),
			};

		})
	};

};

const convert = results =>
	toXML(toJSON(results),
		{ xmlHeader: { standalone: true }});

const xunit = runner =>
	runner.on("end", results => console.log(convert([ results ])));

module.exports = xunit;
module.exports.convert = convert;
