'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


// Code review: Ez csak egyetlen paraméterrel működő megoldás.
// let parameters: number [] = [0, 1, 2, 3]
// function printParams (value: number[]): void {
//     console.log(value);
//     }
// printParams(parameters);


function printParams (...args: number[]): void {
    console.log(...arguments);
    }
printParams(25, 1,2,3);