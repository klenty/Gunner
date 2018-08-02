const Gunner = require('./gunner');
const gunner = new Gunner();

gunner.test('should automatically pass', expect => expect().done());
gunner.test(`should be equal`, expect => expect(1).equal(1));
gunner.test(`objects are deep equal`, expect => expect({ a: 1 }).deepEqual({ a: 1 }));
gunner.test(`objects aren't deeply equal`, expect => expect({a : 1}).deepEqual({ a: 2 }));

const a = 1;
gunner.test('expression should be true', expect => expect(a === 1).isTrue());
gunner.test('promise must reject', expect => expect(Promise.reject(new Error('no'))).equal('rejection'));

gunner.run();
