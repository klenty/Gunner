const { flatten } = require('../util');
const logger = require('../lib/logger');

const runner = instances => (options = {}) => {

	instances = Array.isArray(instances) ? instances : [ instances ];

	if(!instances.length)
		throw new Error(`No instances were passed to Gunner Runner`);

	const type = instances[0].__proto__.constructor.name;

	if (type !== "Gunner" && type !== "Strategy")
		throw new Error (`Runner ${type} is not one of Gunner or Strategy`);

	const RunInstances = instances.filter(i =>
		i.__proto__.constructor.name === type);

	if (RunInstances.length !== instances.length)
		throw new Error (`Not all instances were of type ${type}`);

	return Promise.map(RunInstances, instance => {
		return (
			instance
			.run()
		);
	})
	.then(results => {
		results = flatten(results);
		const log = logger.create(options, true);
		log(results);
		return results;
	});

};

module.exports = runner;
