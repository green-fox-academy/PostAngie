'use strict'

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

let factorialInput: number = 8;
function calculateFactorial (factorialOutput: number): number {
    for (let i=1; i < factorialInput; i++) {
        factorialOutput *= i
    }
    return factorialOutput;
};
console.log(calculateFactorial(factorialInput));