"use strict";

const assert = require('assert');

const min = (nbr1, nbr2) => {
	if ( !isNaN(nbr1) && !isNaN(nbr2) ) {
		if (nbr1 < nbr2) {
			return "The smaller number is "  + nbr1;
		}
		else if (nbr1 > nbr2) {
			return "The smaller number is "  + nbr2;
		}
		else if (nbr1 === nbr2) {
			return "Both numbers are equal.";
		}
		else {
			return "Error";
		}
	}
	else {
		return "Not all your inputs were numbers.";
	}
}
console.log(min(process.argv[2], process.argv[3]));

// write tests