"use strict";

const fizzBuzzer = () => {
	for (let number=1; number<=100; number++) {
		if (Number.isInteger(number/3) && Number.isInteger(number/5)) {
			console.log("FizzBuzz");
		}
		else if (Number.isInteger(number/3)) {
			console.log("Fizz");
		}
		else if (Number.isInteger(number/5)) {
			console.log("Buzz");
		}
		else {
			console.log(number);
		}
	}
}
fizzBuzzer();