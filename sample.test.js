const Gunner = require('./gunner');
const gunner = new Gunner({ name: 'sample tests' });
const a = 1;

gunner.test('should automatically pass', expect => expect().done());
gunner.test(`should be equal`, expect => expect(1).equal(1));
gunner.test(`objects are deep equal`, expect => expect({ a: 1 }).deepEqual({ a: 1 }));
gunner.test(`objects aren't deeply equal`, expect => expect({a : 1}).deepEqual({ a: 2 }));
gunner.test('expression should be true', expect => expect(a === 1).isTrue());
gunner.test('promise must reject', expect =>
	expect(Promise.reject(new Error('Promise Rejected'))).equal('no rejection'));

gunner.test('multiple expect', expect => {

	const a = { };
	a.b = 1;
	a.c = 2;

	return [
		expect(a).hasProp('b'),
		expect(a).hasPair('c', 3),
	];

});

const flamethrower = () => {
	throw new Error('This burns!');
};

gunner.test('should catch error', expect => {
	return expect(flamethrower()).equal(5);
});

gunner.test('should be a Promise (resolved)', expect =>
	expect(Promise.resolve()).isPromise());

gunner.test('should be a Promise (rejected)', expect =>
	expect(Promise.reject()).isPromise());

gunner.test('should resolve to 5', expect =>
	expect(Promise.resolve(5)).resolvesTo(5));

gunner.test('should not resolve to 5', expect =>
	expect(Promise.resolve()).resolvesTo(5));

gunner.test('file must have hello as content', async expect => {
	const { readFile } = require('fs').promises;
	const file = await readFile('./hello.txt', { encoding: 'utf8' });
	return [
		expect(file).equal('hello'),
		expect(file.length).equal(5),
	];
});


gunner.run({ trace: false });
