// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

'use strict';
let untilThis: number = 12
function sum (sumOfNumbers: number): number {
    for (let i=0; i <= untilThis; i++) {
        sumOfNumbers += i
    }
    return sumOfNumbers;
};
console.log(sum(untilThis));