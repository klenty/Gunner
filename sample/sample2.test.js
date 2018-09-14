/**
 * This file contains random tests
 * used during development
 */

const { Gunner, expect, expectMany } = require('..');
const gunner = new Gunner({ name: 'state tests' });

gunner.before(Gunner.Start, () => 'world', 'hello');
gunner.before(Gunner.Start, () => 'earth', 'below');
gunner.before(Gunner.Start, () => 'waters', 'shallow');
gunner.before('*', () => 'stars', 'stars');
gunner.before('Test 1', () => 'nope', 'test1');

gunner.test('Test 1', state =>
	expectMany([
		expect(state['@start']).deepEquals({
			hello: 'world',
			below: 'earth',
			shallow: 'waters'
		}),
		expect(state['@every']).deepEquals({ stars: 'stars' }),
		expect(state['@this']).deepEquals({ test1: 'nope' }),
	]));

gunner.test('(should fail) Test 2', state =>
	expect(state['@start']).deepEquals({ 'hellna': true }));

gunner.run({ log: true }).then(console.log);