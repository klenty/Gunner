const Readable = require('stream').Readable;
const TAP = require('./tap');
const xUnitConverter = require('tap-xunit');

const streamify = text => {
	const s = new Readable();
	s._read = () => {};
	s.push(text);
	s.push(null);
	return s;
};

const xunit = (runner) => {

	runner.on('end', results =>
		streamify(TAP.convert(results, { trace: false }))
		.pipe(xUnitConverter())
		.pipe(process.stdout));

};

module.exports = xunit;
