module.exports = {

	clear: () => {

		if (typeof global === 'undefined'
			|| typeof global.process === 'undefined'
			|| typeof global.process.stdout === 'undefined'
		) return;

		const process = global.process;

		// clear screen
		process.stdout.write('\u001b[2J');
		// set cursor position to top
		process.stdout.write('\u001b[1;1H');

	},

};
