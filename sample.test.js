const Gunner = require('./gunner');
const gunner = new Gunner();

gunner.test('should return okay', expect => expect(1).to.be(1));
gunner.test('objects are equal', expect => expect({ a: 1 }).to.be.deepEqual({ a: 1 }));
gunner.test('test should break', expect => expect({a : 1}).to.be.deepEqual({ a: 2 }));

const a = 1;
gunner.test('should be true', expect => expect(a === 1).to.be.true());

gunner.run().then(results => {
	const success = results.filter(r => r.result === 'pass');

	console.log(`\n${success.length} tests passed of ${results.length}\n`);
	results.forEach(r => {
		console.log(`${r.result === 'pass' ? '✅' : '❌'} :: ${r.description}${r.error ? `\n  ${JSON.stringify(r.error)}` : ''}`);
	});
});
