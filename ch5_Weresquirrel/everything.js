// works!
"use strict";
// the version with a loop:
const every = (array, testFunc) => testFunc(array);
console.log(
  every([10, 4, 8], arr => {
    for (let element of arr) {
      if (element % 2 !== 0) {
        return false;
      }
    }
    return true;
  })
);
// the version with some:
const everyWithSome = (array, testFunc) => {
  if (!testFunc(array)) {
    return true;
  } else {
    return false;
  }
};
console.log(everyWithSome([10, 4, 8], arr => arr.some(elem => elem % 2 !== 0)));
