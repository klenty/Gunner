# Gunner

<img alt="Django Unchained" src="assets/gun.jpeg" height="350" />

#### _Tiny, but fully loaded._

> Gunner is a zero magic, fast test-runner and assertion framework. There are no magic globals or CLI specific interface.

## Requirements & Usage

`Gunner` uses very modern JavaScript, and hence requires **node 10+** ❗️⚠️ currently.

Create a new `Gunner` instance and simply write your tests. The assertion methods are passed in as the callback as an `expect` object to the test function.

```JavaScript
const gunner = new Gunner();

gunner.test('arrays are equal', expect => {
	return expect([1, 2,]).deepEqual([1 ,2]);
});

gunner.run(); // starts the runner
```

## Documentation

- ### `Class`:
	- #### [`Gunner.constructor`](DOCUMENTATION.md#new-gunner-options)

- ### `Methods`:
	- #### [`Gunner#test`](DOCUMENTATION.md#gunnertest-title-implementation)
	- #### [`Gunner#before`](DOCUMENTATION.md#gunnerbefore-title-implementation)
	- #### [`Gunner#after`](DOCUMENTATION.md#gunnerafter-title-implementation)
	- #### [`Gunner#run`](DOCUMENTATION.md#gunnerrun-options)

- ### `Constants`:
	- #### `[Gunner.Start]`
	- #### `[Gunner.End]`

- ### [`State and Advanced Usage`](DOCUMENTATION.md#state)

## Credits

`Gunner` was built at [Klenty](https://klenty.com), a sales automation startup, by Muthu Kumar [(@MKRhere)](https://github.com/MKRhere).
