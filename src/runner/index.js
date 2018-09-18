const reporters = require('../reporters');

const isBrowser =
	new Function("try { return this === window } catch (e) { return false }");

const runner = instances => (options = {}) => {

	if(isBrowser())
		throw new Error(
			'Runner is not adapted for browsers yet.'
			+ ' Use regular Gunner');

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
			.run({ reporter: 'min' })
		);
	}))
	.then(results => {

		return options.request
			? {
				default: results,
				[options.request]: reporters[options.request].convert(results)
			}
			: results;

	});

};

module.exports = runner;
