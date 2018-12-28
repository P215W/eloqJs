// dealing with ch. 4, ex. "The sum of a range": 
'use strict';
const sumOfRange = (start, end, step) => {
  	const numbers = [];
 	if (step>0) {
		for (let i=start; i<=end; i+=step) {
	   		numbers.push(i);
		}
	}
	else {
 		for (let i=start; i>=end; i+=step) {
    		numbers.push(i);
  		}
	}
  	const sum = numbers.reduce((total, number) => total += number);
	return sum;
};
console.log(sumOfRange(1, 10, 1));  // exp.: 55
console.log(sumOfRange(1, 10, 2));  // exp.: 25
console.log(sumOfRange(5, 2, -1));  // exp.: 14