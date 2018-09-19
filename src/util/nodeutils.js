module.exports = {

	clear: () => {

		// clear screen
		process.stdout.write('\u001b[2J');
		// set cursor position to top
		process.stdout.write('\u001b[1;1H');

	},

};
