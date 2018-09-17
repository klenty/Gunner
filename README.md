# Gunner

<img alt="Django Unchained" src="https://raw.githubusercontent.com/klenty/Gunner/master/assets/gun.jpeg" height="350" />

#### _Tiny, but fully loaded._

> Gunner is a zero magic, fast test-runner and assertion framework. There are no magic globals or CLI specific interface.

## Requirements & Usage

`Gunner` uses very modern JavaScript, and hence requires **node 10+** ❗️⚠️ currently.

Create a new `Gunner` instance and simply write your tests. The assertion methods are passed in as the callback as an `expect` object to the test function.

```JavaScript
const { Gunner, expect } = require('@klenty/gunner');
// Create new instance
const gunner = new Gunner();

// Define tests
gunner.test('arrays are equal', () => {
	return expect([1, 2,]).deepEqual([1 ,2]);
});

// Starts the runner
gunner.run();
```

## Documentation

- ### `Class`:
	- #### [`Gunner.constructor`](https://github.com/klenty/Gunner/blob/master/DOCUMENTATION.md#new-gunner-options)

- ### `Methods`:
	- #### [`Gunner#test`](https://github.com/klenty/Gunner/blob/master/DOCUMENTATION.md#gunnertest-title-implementation)
	- #### [`Gunner#before`](https://github.com/klenty/Gunner/blob/master/DOCUMENTATION.md#gunnerbefore-title-implementation)
	- #### [`Gunner#after`](https://github.com/klenty/Gunner/blob/master/DOCUMENTATION.md#gunnerafter-title-implementation)
	- #### [`Gunner#run`](https://github.com/klenty/Gunner/blob/master/DOCUMENTATION.md#gunnerrun-options)

- ### `Constants`:
	- #### `[Gunner.Start]`
	- #### `[Gunner.End]`

- ### [`State and Advanced Usage`](https://github.com/klenty/Gunner/blob/master/DOCUMENTATION.md#state)

## Credits

`Gunner` was built by Muthu Kumar [(@MKRhere)](https://github.com/MKRhere) at [Klenty](https://klenty.com), a sales automation startup.
