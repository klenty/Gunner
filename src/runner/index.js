const { flatten } = require('../util');

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

	return Promise.all(RunInstances.map(instance => {
		return (
			instance
			.run(options)
		);
	}))
	.then(results => {
		return flatten(results);
	});

};

module.exports = runner;
