"use strict";

const assert = require("assert");
let storer = ["\n" + 1];
let number;

const fizzBuzzer = () => {

	for (let number=2; number<=100; number++) {
		if (Number.isInteger(number/3) && Number.isInteger(number/5)) {
			storer.push("\n" + "FizzBuzz");
		}
		else if (Number.isInteger(number/3)) {
			storer.push("\n" + "Fizz");
		}
		else if (Number.isInteger(number/5)) {
			storer.push("\n" + "Buzz");
		}
		else {
			storer.push("\n" + number);
		}
	}
	const storerString = storer.toString();
	return storerString;
}

// tests
const expectedDivis3 = "\n" + "Fizz";
const expectedDivis5 = "\n" + "Buzz";
const expectedDivis3a5 = "\n" + "FizzBuzz";
const expectedNoDivis = "\n" + 2;

assert.strictEqual(storer[3-1], expectedDivis3, "Expected Fizz");
assert.strictEqual(storer[5-1], expectedDivis5, "Expected Buzz");
assert.strictEqual(storer[15-1], expectedDivis3a5, "Expected FizzBuzz");
assert.strictEqual(storer[2-1], expectedNoDivis, "Expected a number");

// logging function value
console.log(fizzBuzzer());