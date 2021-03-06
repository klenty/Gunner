const { eventMap, eventVerbs } = require('../util/constants');
const { clear } = require('../util/nodeutils');

const convert = x => x;

const count = {
	pass: 0,
	fail: 0,
	skip: 0,
	collapse: function() {
		return this.pass + this.fail + this.skip;
	}
};

const doneHandler = event => {

	clear();
	const mapEvent = eventMap[event.status];
	count[mapEvent]++;
	console.log(`${count[mapEvent]} tests ${eventVerbs[mapEvent][2]}`
		+ ` (total: ${count.collapse()})`);

};

const Min = runner => {

	runner.on('start', () => console.log('Started tests'));

	runner.on('pass', doneHandler);
	runner.on('fail', doneHandler);
	runner.on('skip', doneHandler);

	runner.on('end', results => {

		clear();
		console.log(`Test suite ${results.name} has done running.`);
		console.log('Success ratio:', results.successPercent, '%');

	});

};

module.exports = Min;
module.exports.convert = convert;
