"use strict";

const gridCreator = (size) => {
	for (let i=1; i <= size; i++) {
		if (Number.isInteger(i/2)) {
			console.log("# # # # ");
		}
		else {
			console.log(" # # # #");
		}
	}
}
gridCreator(8);