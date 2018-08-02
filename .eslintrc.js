module.exports = {
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"no-nested-ternary": "warn",
		"no-self-compare": "error",
		"no-trailing-spaces": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-console": "off",
		"no-undef": "off",
		"indent": [
			"error",
			"tab",
			{ MemberExpression: 0, }
		],
		"linebreak-style": [ "error", "unix" ],
		"semi": [ "error", "always" ],
		"eqeqeq": [ "error", "always", {"null": "ignore"} ],
	}
};
