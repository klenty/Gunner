/**
 * This file contains random tests
 * used during development
 */

const Gunner = require('../index.js');
const gunner = new Gunner({ name: 'state tests' });

gunner.before(Gunner.Start, () => 'hello');
gunner.before(Gunner.Start, () => 'below');
gunner.before(Gunner.Start, () => 'shallow');
gunner.before('*', () => 'stars');
gunner.before('Test 1', () => 'nope');

gunner.test('Test 1', (expect, state) =>
	[
		expect(state['@start']).deepEquals([ 'hello', 'below', 'shallow' ]),
		expect(state['@every']).deepEquals([ 'stars' ]),
		expect(state['@this']).deepEquals([ 'nope' ]),
	]);

gunner.test('(should fail) Test 2', (expect, state) =>
	expect(state['@start']).deepEquals([ 'hellno' ]));

gunner.run({ log: true });