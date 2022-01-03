// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

'use strict';
export function sum (param: number) {
function sum (sumOfNumbers: number): number {
   let output: number = 0;
    for (let i=0; i <= sumOfNumbers; i++) {
        output += i
    }
    return output;
};
console.log(sum(12));
};