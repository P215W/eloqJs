// Dealing with ch.4, ex."Reversing an array" without using the reverse() method:

"use strict";
// Creating a new array, i.e. the non-mutating way:
const reverseArray = (array) => {
    const arrayNew = [];
    for (let i = array.length-1; i>=0; i--) {
        arrayNew.push(array[i]);
    }
    return arrayNew;
};
console.log("New array:", reverseArray(["1", "2", 3, 4, true, false]));

// Mutating original array:
const reverseArrayInPlace = (array) => {
    for (let i=array.length-1; i>=0; i--) {
        array.splice(array.length-1-i, 0, array[array.length-1]);
        array.pop();
    }
    return array;
};
console.log("Mutated array:", reverseArrayInPlace(["1", "2", 3, 4, true, false]));