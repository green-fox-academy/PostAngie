// -  Create a variable named `baseNumber` and assign the value `123` to it
// -  Create a function called `doubleNumber()` that doubles it's input parameter
//    and returns the doubled value
// -  Log the result of `doubleNumber(baseNumber)` to the console
'use strict';
let baseNumber: number = 123;
function doubleIt(inputNumber: number): number {
    return inputNumber * 2
};
console.log("This is the double: " + doubleIt(baseNumber));

// other way
let baseNumber2: number = 123
function doubleIt2(toDouble: number): number {
    return toDouble = baseNumber2 * 2
}
let doubled: number = doubleIt2(baseNumber2); // itt a function eredményéből változót csináltam
console.log('Base is: ' + baseNumber2 + ' Double is: ' + doubled);
