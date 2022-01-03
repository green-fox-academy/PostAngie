'use strict'

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial (factorialInput: number): number {
    let output: number = 1
    for (let i=1; i <= factorialInput; i++) {
        output *= i
    }
    return output;
};
console.log(calculateFactorial(8));