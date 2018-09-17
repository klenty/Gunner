# Documentation

## Index

- ### `Class`:
	- #### [`Gunner.constructor`](#new-gunner-options)

- ### `Methods`:
	- #### [`Gunner#test`](#gunnertest-title-implementation)
	- #### [`Gunner#before`](#gunnerbefore-title-implementation)
	- #### [`Gunner#after`](#gunnerafter-title-implementation)
	- #### [`Gunner#run`](#gunnerrun-options)

- ### `Constants`:
	- #### `[Gunner.Start]`
	- #### `[Gunner.End]`

- ### [`State and Advanced Usage`](#state)

---

## API

### new Gunner (options)

Creates a new Gunner instance.

#### Options

- **`name`** [default: undefined]: A name for this Gunner instance or suite.

#### Example

```JavaScript
const gunner = new Gunner(name);
```

[`INDEX`](#index)

### Gunner#test (title, implementation)

Registers a new test. A test can have multiple expect statements by using `expectMany`. The first expect to fail will cause the test to fail.

The `expect` function exported with Gunner is expected to be called and returned, but any assertion module may be used, as long it either throws an error, or you return the rejection. If you use a different assert module such as `chai`, remember to return Promises properly, else you may have false positives as tests will pass, but failures will become `unhandledRejections`.

A [state object (explained below)](#state) is passed into the callback function.

#### Example

```JavaScript
const { Gunner, expect } = require('@klenty/gunner');

gunner.test('sum should equal 3', () => {

	const sum = 1 + 2;
	return expect(sum).equal(3);

});
```

You can also pass a function with parameters to be called with:

```JavaScript
const { Gunner, expect } = require('@klenty/gunner');
const sum = (a, b) => a + b;

gunner.test('sum should equal 3', () => expect(sum, [ 1, 2 ]).equal(3));
```

Expecting multiple results:

```JavaScript
const { Gunner, expect, expectMany } = require('@klenty/gunner');

gunner.test('multiple expects should be true', () => {

	const a = 1 + 2;
	const b = 'Hello World';

	return expectMany(
		expect(a).equal(3),
		expect(b).equal('Goodbye World'),
	);

});
```

Asynchronous tests:

```JavaScript
gunner.test('asynchronous test', async () => {

	const response = await axios.post(url, request);
	const userObject = await db.find('userdetails', { username });

	await expect(response.status).equal(200);
	await expect(userObject).deepEquals(testUser);

})
```

[`INDEX`](#index)

### Gunner#before (title, implementation)

Registers a new `before` hook. `before` hooks run before the selected test(s). The implementation callback is similar to that of a test. `state` will accumulate over multiple hooks. The third parameter is a label to store to `state`. Multiple hooks with the same label will override, and hooks without labels will not contribute to state.

The first argument can be one of:

- title of a test, which causes the hook to run once before the mentioned test

- `'*'`, which causes the hook to run once before _every_ test

- either of the constants: `Gunner.Start`, and `Gunner.End`.

`gunner.before(Gunner.Start, () => {})` will run once before Gunner starts running any tests. The `Gunner.End` equivalent will run once after running all tests (before ending).

#### Example

```JavaScript
gunner.before('insert to db should not error', async () => {

	// Clear db before test
	await db.remove('users', { username: 'mkrhere' });

});

gunner.test('insert to db should not error', async () => {
	
	const user = await db.insert({
		username: 'mkrhere',
		firstname: 'muthu',
	});

	await expect(user).hasPair('firstname', 'muthu');

});
```

[`INDEX`](#index)

### Gunner#after (title, implementation)

Registers a new `after` hook. `after` hooks run after the corresponding test(s). The implementation callback is similar to that of a test, with the exception that no expect object will be passed.

The first argument is similar to `Gunner#before`, but does not accept `Gunner.Start` and `Gunner.End` constants, only `'*'` or test description.

#### Example

```JavaScript
gunner.test('insert to db should not error', expect => {
	
	const user = await db.insert({
		username: 'mkrhere',
		firstname: 'muthu',
	});
	return expect(user).hasPair('firstname', 'muthu');

});

gunner.after('insert to db should not error', () => {

	// Clear db after test
	return db.remove('users', { username: 'mkrhere' });

});
```

[`INDEX`](#index)

### Gunner#run (options)

Starts running Gunner tests. Takes an options object as optional parameter.

#### Options

- **`log`** [default: true]: Turn logs on or off (returns array of results)
- **`trace`** [default: false]: Turn stack traces on or off

#### Example

```JavaScript
const options = { logs: true, trace: true };
gunner.run(options);
```

[`INDEX`](#index)

### State

> `[ADVANCED]`

Additionally, hooks contribute to the state object with their return values that will be passed down hierarchically to other hooks, and their matching tests. The state object is passed as the first argument to all tests and hooks. State can only be created by hooks, by passing a label as the third argument.

State has four hierarchies:

- `'@start'` (from the `Gunner.Start` hooks).
- `'@every'` (from the `'*'` hooks).
- `'@this'` (from the hook registered to this test).
- `'@results'` (results from all tests, passed only to the `Gunner.End` hook).

#### Example

```JavaScript
gunner.before(
	Gunner.Start,
	() => DBModule.createDbConnection(),
	'db'
);

gunner.before(
	'test user should exist in db',
	state => {

		// Receives '@start' and '@every' states if exists
		const db = state['@start'].db;

		const testUser = await db.insert('users', {
			username: 'mkrhere',
			firstname: 'muthu',
		});
		return testUser.username;

	},
	'username'
);

gunner.test('test user should exist in db', state => {

	// Receives '@start', '@every', and '@this' states
	// Each state level is an array because multiple hooks may exist per level
	const db = state['@start'].db;
	const username = state['@this'].username;

	const user = await db.find('users', { username });
	return expect(user).hasPair('firstname', 'muthu');

});

gunner.after('test user should exist in db', state => {

	const db = state['@start'][0];
	const db = state['@this'][0];

	return db.remove('users', { username });

});
```

[`INDEX`](#index)

[`Back to README`](README.md)