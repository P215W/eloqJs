"use strict";

const triangleCreator = () => {
	let hashChar = "#";
	for (let x = 0; x<7; x++) {
		console.log(hashChar);
		hashChar = hashChar + "#";
	}
};

triangleCreator();