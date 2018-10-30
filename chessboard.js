"use strict";

const assert = require("assert");


// const array1 = ["#", "#", " ", "#"];
// console.log(array1.toString());


const gridCreator = (symbol, size) => {

	const lineUn = " " + symbol + " " + symbol + " " + symbol + " " + symbol       + "\n";
	const lineEv =       symbol + " " + symbol + " " + symbol + " " + symbol + " " + "\n";
	// -> spread(...) const lineEv = " " (?is there a \thing for a space?), ...lineUn, " ";

/* function tester () {
	print element * a specified number of times, then add a line break, then
	print element differently
	make the whole thing one simple array, then console.log the result of this array(maybe array.toString needed). 

	create arr with one symbol, then change, the symbol  / the line with array methods. üben: array to string. dann array changen. changen ohne loop und ohne mutation 

} */ 

const lineUnArr = [symbol];
console.log("Here it comes:" + "\n" + lineUnArr);

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

// kalender, poststation 110, urlaub eintragen in Bamboo mit Hinweis, das es variiert je nach Start wie besprochen mit SAC und MST.
// writing it witout loops, without mutating. Did mutate so far?

// tests
const expected1 = " ! ! ! !" + "\n";  // one line grid
const expectedEven = " 1 1 1 1" + "\n" + "1 1 1 1 " + "\n";  // even no. of lines
const expectedUneven = " a a a a" + "\n" + "a a a a " + "\n" + " a a a a" + "\n";  // uneven no. of lines

assert.strictEqual(gridCreator("!", 1), expected1, "Expected one line with !");
assert.strictEqual(gridCreator("1", 2), expectedEven, "Expected 2 line grid with number 1");
assert.strictEqual(gridCreator("a", 3), expectedUneven, "Expected 3 line grid with a");

// logging function value
console.log(gridCreator(process.argv[2], process.argv[3]));