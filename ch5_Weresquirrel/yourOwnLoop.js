"use strict";
/* // de-comment for the second version with function declarations, i.e. non-IIFE version
const testFu = value => {
  if (value <= 10) {
    return true;
  }
  // return value<10 && value%2 === 0;
};
let arr = [];
const bodyFu = value => {
  console.log("bodyFu", value);
  arr.push(value + "a");
  return arr;
};
const updatedVal = val => {
  console.log("updaterFu", val);
  val = val + 1;
  console.log("new value", val);
  return val;
};
/*
const mainFunc = (value, testF, bodyF, updaterF, endValue, result) => {
 for (let i=0; i<=15; i++) {
    console.log("for loop says hi", value);
    if (testF(value) === true) {
        result = bodyF(value);
        value = updaterF(value);
    } else {
        value = updaterF(value);
        if (value>endValue) {
            console.log("bricht");
            break;
        }
    }
 }
 return result;
};
console.log(mainFunc(0, testFu, bodyFu, updatedVal, 10)); // print even numb from 2-10.
*/
const mainFunc2 = (value, testF, bodyF, updateF) => {
  let arr = [];
  for (let i = value; testF(i); i = updateF(i)) {
    arr = [...arr, bodyF(i)];
  }
  return arr;
};
console.log(mainFunc2(1, nbr => nbr <= 3, n => n * 2, n => n + 1)); // double value of no.'s 1-3 -> 2,4,6
