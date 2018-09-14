const fs = require(`fs`).promises;
const {
	map,
	pipe,
	filter,
	flatten,
	wrapWith,
	promiseAll,
	containsPath,
} = require('../util');

// const { warn } = console;

// const validate = config => {
// 	if(!config) throw new Error(`Create a config file to proceed.`);
// 	if(!config.testData) throw new Error(`"testData" property not found in config.js`);
// 	if(!config.plans) throw new Error(`"planDir" property not found in config.js`);
// 	if(!config.pattern) warn(`> "pattern" property not found in config.js.`
// 		+ ` All json files in the target directory will be loaded.`);
// };

const isFileOrDir = path => fs.stat(path)
.then(stat =>
	stat.isDirectory()
		? ({ path, type: `dir` })
		: ({ path, type: `file` })
);

const _matchOnePattern = (pattern, path) => {
	const tests = Array.isArray(pattern) ? pattern : [pattern];
	return tests.some(test => new RegExp(test).test(path));
};

const _getEachFile = ({ path, exclude, pattern }) => item =>
	isFileOrDir(path + `/` + item)
	.then(y => {
		if(exclude && containsPath(exclude, y.path))
			return [];
		/* eslint-disable-next-line */
		return y.type === `dir`
			? requireDeep({ plans: y.path, exclude, pattern })
			: _matchOnePattern(pattern || '.json', y.path)
			// Wrapping in object to prevent accidental flattening
				? wrapWith(`module`)(require(y.path))
				: [];
	});

const requireDeep = ({ plans: path, exclude, pattern = '.json' }) =>
	isFileOrDir(path)
	.then(o => (o.type === `dir`)
		? pipe(
			fs.readdir,
			map(_getEachFile({ path, exclude, pattern })),
			promiseAll,
			flatten,
			filter(Boolean), // Filter out undefined values
			map(y => y.module || y), // Unwrap objects from their wrappers
		)(o.path)
		: Promise.reject(`${path} is not a directory`)
	);

module.exports = requireDeep;
