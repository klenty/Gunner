/**
 * This file contains random tests
 * used during development
 */

const Gunner = require('../src/Gunner');
const expect = Gunner.expect;
const expectMany = Gunner.expectMany;
const gunner = new Gunner('sample tests');
const a = 1;

// gunner.before(Gunner.Start, () => console.log('Started tests!'));
// gunner.before(Gunner.End, () => console.log('Ended tests!'));
// let runCount = 1;
// gunner.before('*', () => console.log(`Running test ${runCount++}`));

gunner.test('should automatically pass', () => expect().done());
gunner.test(`should be equal`, () => expect(1).equal(1));
gunner.test(`objects are deep equal`, () => expect({ a: 1 }).deepEqual({ a: 1 }));
gunner.test('expression should be true', () => expect(a === 1).isTrue());

gunner.test('should be a Promise (resolved)', () =>
	expect(Promise.resolve()).isPromise());

gunner.test('should be a Promise (rejected)', () =>
	expect(Promise.reject()).isPromise());

gunner.test('wait and resolve', () => {
	return new Promise(r => {
		setTimeout(
			() => r('ok'),
			50
		);
	});
});

gunner.test('should resolve to 5', () =>
	expect(Promise.resolve(5)).resolvesTo(5));

gunner.before(
	'file must have hello as content',
	() => { throw new Error('>> I caused a before hook to fail!') }
);

gunner.test('file must have hello as content', async () => {
	const { readFile } = require('fs').promises;
	const file = await readFile(__dirname + '/hello.txt', { encoding: 'utf8' });
	return [
		expect(file).equal('hello'),
		expect(file.length).equal(5),
	];
});

gunner.test('(should fail) Should automatically fail', () =>
	expect().fail());

gunner.test('(should fail) Value is not a Promise', () =>
	expect(5).isPromise());

gunner.test('(should fail) Error is not a Promise', () =>
	expect(flamethrower()).isPromise());

gunner.test(`(should fail) objects aren't deeply equal`, () => expect({a : 1}).deepEqual({ a: 2 }));

gunner.test('(should fail) promise must reject', () =>
	expect(Promise.reject(new Error('Promise Rejected'))).equal('no rejection'));

gunner.test('(should fail) multiple expect', () => {

	const a = { };
	a.b = 1;
	a.c = 2;

	return expectMany(
		expect(a).hasProp('b'),
		expect(a).hasPair('c', 3),
	);

});

const flamethrower = () => {
	throw new Error('This burns!');
};

gunner.test('(should fail) should catch error', () => {
	return expect(flamethrower, []).equal(5);
});

gunner.test('(should fail) should not resolve to 5', () =>
	expect(Promise.resolve()).resolvesTo(5));

const trace = process.argv.slice(2).indexOf('--trace') !== -1;
const reporter = process.argv.slice(2).indexOf('--log') !== -1;

// gunner.run({ trace, reporter });
gunner.run({ reporter:'xunit' });
