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

Registers a new test.

#### Usage

```JavaScript
gunner.test('sum should equal 3', expect => {
	const sum = 1 + 2;
	return expect(sum).equal(3);
});
```

### Gunner#run

Starts running Gunner tests.

#### Usage

```JavaScript
gunner.run(options);
```
