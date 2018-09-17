const tag = (name, attrs, close, content) => {
	const end = close ? "/>" : ">";
	const pairs = [];
	let tag;

	Object.keys(attrs).forEach(key => {
		if (Object.prototype.hasOwnProperty.call(attrs, key)) {
			pairs.push(key + '="' + (attrs[key]) + '"');
		}
	});

	tag = "<" + name + (pairs.length ? " " + pairs.join(" ") : "") + end;
	if (content) {
		// content = content instanceof String ? content : escape(content);
		tag += content + "</" + name + end;
	}
	return new String(tag);
};

const convert = results => {

	const { count, success, failures, skipped } = results;

	return '<?xml version="1.0"?>' + tag(
		'testsuites',
		{},
		false,
		tag(
			'testsuite',
			{
				tests: count,
				success: success.length,
				failures: failures.length,
				skipped: skipped.length
			},
			false,
			results.reduce((acc, r) => {
				const close = r.status === 'ok';
				const content = r.status !== 'ok' &&
					(r.status === 'skip'
						? tag('skipped', {}, true)
						: tag(
							'failure', {},
							!r.reason, r.reason ? escape(r.reason) : ''));
				acc += tag(
					'testcase',
					{ name: escape(r.description) },
					close,
					content || ''
				);
				return acc;
			}, '')
		)
	);

};

const xunit = runner => {
	runner.on("end", results => {

		console.log(convert(results));

	});
};

module.exports = xunit;
module.exports.convert = convert;
