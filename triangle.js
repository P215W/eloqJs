"use strict";

const assert = require("assert");

const triangleCreator = (symbol, size) => {

	let line = symbol;
	let storer = line + "\n";
	let adder;

	for (let i=2; i<=size; i++) {
		line += symbol; 
		adder = line + "\n";
		storer += adder;
	}

	return storer;
}

// test
const expected = "#" + "\n" + "##" + "\n" + "###" + "\n" + "####" + "\n";
assert.strictEqual(triangleCreator('#', 4), expected, "Two triangles are not equal");

// logging function value
console.log(triangleCreator(process.argv[2], process.argv[3]));