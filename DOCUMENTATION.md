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

- **`name`** [default: undefined]: A name for this Gunner instance.

#### Example

```JavaScript
const gunner = new Gunner(options);
```

[`INDEX`](#index)

### Gunner#test (title, implementation)

Registers a new test. An `expect` object is passed into the implementation callback as the first argument. A test can have multiple expect statements. They should be returned as an array. The first expect to fail will cause the test to fail.

The `expect` object is passed in as first argument, but any assertion module may be used, as long it either throws an error, or rejects. If you use a different assert module such as `chai`, remember to return Promises properly, else some Promises will be lost, just like in regular JavaScript.

#### Example

```JavaScript
gunner.test('sum should equal 3', expect => {
	const sum = 1 + 2;
	return expect(sum).equal(3);
});
```

Expecting multiple results:

```JavaScript
gunner.test('multiple expects should be true', expect => {
	const a = 1 + 2;
	const b = 'Hello World';

	return ([
		expect(a).equal(3),
		expect(b).equal('Goodbye World'),
	]);
});
```

Asynchronous tests:

```JavaScript
gunner.test('asynchronous test', async expect => {

	const response = await axios.post(url, request);
	const userObject = await db.find('userdetails', { username });

	return [
		expect(response.status).equal(200);
		expect(userObject).deepEquals(testUser);
	];

})
```

[`INDEX`](#index)

### Gunner#before (title, implementation)

Registers a new `before` hook. `before` hooks run before the selected test(s). The implementation callback is similar to that of a test, with the exception that no expect object will be passed.

The first argument can be one of:

- title of a test, which causes the hook to run once before the mentioned test

- `'*'`, which causes the hook to run once before _every_ test

- either of the constants: `Gunner.Start`, and `Gunner.End`.

`gunner.before(Gunner.Start, () => {})` will run once before Gunner starts running any tests. The `Gunner.End` equivalent will run once after running all tests (before ending).

#### Example

```JavaScript
gunner.before('insert to db should not error', () => {

	// Clear db before test
	return db.remove('users', { username: 'mkrhere' });

});

gunner.test('insert to db should not error', expect => {
	
	const user = await db.insert({
		username: 'mkrhere',
		firstname: 'muthu',
	});
	return expect(user).hasPair('firstname', 'muthu');

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

Additionally, `before` hooks create state objects from returned values that will be passed down hierarchically to other `before` and `after` hooks, and their matching tests. The state object is passed as second argument to tests. Hooks will also receive as the first argument state from hooks above itself.

This has four levels:

- `'@start'` (from the `Gunner.Start` hooks).
- `'@every'` (from the `'*'` hooks).
- `'@this'` (from the hook registered to this test).
- `'@results'` (results from all tests, passed only to the `Gunner.End` hook).

#### Example

```JavaScript
gunner.before(Gunner.Start, () => {
	const db = DBModule.createDbConnection();
	return db;
});

gunner.before('test user should exist in db', state => {

	// Receives '@start' and '@every' states if exists
	const db = state['@start'][0];

	const testUser = await db.insert('users', {
		username: 'mkrhere',
		firstname: 'muthu',
	});
	return testUser.username;

});

gunner.test('test user should exist in db', (expect, state) => {

	// Receives '@start', '@every', and '@this' states
	// Each state level is an array because multiple hooks may exist per level
	const db = state['@start'][0];
	const username = state['@this'][0];

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