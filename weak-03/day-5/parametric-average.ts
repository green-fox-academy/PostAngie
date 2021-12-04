'use strict';

let input: number = 1;
let container: number = 1;
let i: number = 1;
let output: number = 1;
let sum: number;
let average: number;
while ( container < 5) {
    i++
    container++
    sum = output + container
    average = sum / i
    console.log ('Sum: ' + sum)
    console.log ('Average: ' + average)
    output = sum
}