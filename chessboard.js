"use strict";

const assert = require("assert");

const gridCreator = (symbol, size) => {

	const lineUn = " " + symbol + " " + symbol + " " + symbol +" " + symbol + "\n";
	const lineEv = symbol + " " + symbol + " " + symbol + " " + symbol + " " + "\n";
	let storer = lineUn;
	let line;

	for (let i=2; i<=size; i++) {

		if (Number.isInteger(i/2)) {
			line = lineEv;
		}

		else {
			line = lineUn;
		}

		storer += line;
	}

	return storer;
}

// tests
const expected1 = " ! ! ! !" + "\n";  // one line grid
const expectedEven = " 1 1 1 1" + "\n" + "1 1 1 1 " + "\n";  // even no. of lines
const expectedUneven = " a a a a" + "\n" + "a a a a " + "\n" + " a a a a" + "\n";  // uneven no. of lines

assert.strictEqual(gridCreator("!", 1), expected1, "Expected one line with !");
assert.strictEqual(gridCreator("1", 2), expectedEven, "Expected 2 line grid with number 1");
assert.strictEqual(gridCreator("a", 3), expectedUneven, "Expected 3 line grid with a");

// logging function value
console.log(gridCreator(process.argv[2], process.argv[3]));