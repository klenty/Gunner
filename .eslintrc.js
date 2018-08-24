module.exports = {
	"parserOptions": {
		"ecmaVersion": 2018,
	},
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true,
	},
	"extends": "eslint:recommended",
	"rules": {
		"no-global-assign": "off",
		"no-console": "off",
		"no-undef": "off",
		"no-nested-ternary": "warn",
		"no-self-compare": "error",
		"no-trailing-spaces": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-undef": "error",
		'comma-dangle': [ 'error', 'only-multiline' ],
		"linebreak-style": [ "error", "unix" ],
		"semi": [ "error", "always" ],
		"eqeqeq": [ "error", "always", {"null": "ignore"} ],
		"indent": [ "error", "tab",
			{
				MemberExpression: 0,
				SwitchCase: 1,
			}
		],
	}
};
