// dealing with ch.4, ex. "Reversing an array" without using the reverse() method:

"use strict";
// Creating a new array, i.e. the non-mutating way:
const array = ["1", "2", "3", 4,5,6, true, false];
const reverseArray = (anyArray) => {
    const arrayNew = [];
    for (let i=1; i<=anyArray.length; i++) {
        arrayNew.push(anyArray[anyArray.length-i]);
    }
    return arrayNew;
};
console.log("New array: ", reverseArray(array));


// Mutating the original array:
const reverseArrayInPlace = (anyArr) => {
    for (let i=1; i<=anyArr.length; i++) {
        anyArr.splice(i-1, 0, anyArr[anyArr.length-1]);
        anyArr.pop();
    }
    return anyArr; 
};
console.log("Mutated array: ", reverseArrayInPlace(array));