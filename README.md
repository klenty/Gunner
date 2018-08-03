# Gunner

<img alt="Django Unchained" src="assets/gun.jpeg" height="350" />

#### _Tiny, but fully loaded._

> Gunner is a zero magic, fast test-runner and assertion framework. There are no magic globals or CLI specific interface.

## Usage

Create a new `Gunner` instance and simply write your tests. The assertion methods are passed in as the callback to the test function.

```JavaScript
const gunner = new Gunner();

gunner.test('arrays are equal', expect => {
	return expect([1, 2,]).deepEqual([1 ,2]);
});

gunner.run();
```

## API

---
### [new Gunner(options)](#gunner-constructor)
### [Gunner#test(title, implementation)](#gunnertest)
### [Gunner#run(options)](#gunnerrun)
---

### Gunner constructor

Creates a new Gunner instance.

#### Usage

```JavaScript
const gunner = new Gunner(options);
```

### Gunner#test

Registers a new test. A test can have multiple expect statements. They should be returned as an array. The first expect to fail will cause the test to fail.

#### Usage

```JavaScript
gunner.test('sum should equal 3', expect => {
	const sum = 1 + 2;
	return expect(sum).equal(3);
});

gunner.test('multiple expects should be true', expect => {
	const a = 1 + 2;
	const b = 'Hello World';

	return ([
		expect(a).equal(3),
		expect(b).equal('Goodbye World'),
	]);
});
```

### Gunner#run

Starts running Gunner tests. Takes an options object as optional parameter.

#### Options

- **`log`** [default: true]: Turn logs on or off (returns array of results)
- **`trace`** [default: false]: Turn stack traces on or off

#### Usage

```JavaScript
const options = { logs: true, trace: true };
gunner.run(options);
```
