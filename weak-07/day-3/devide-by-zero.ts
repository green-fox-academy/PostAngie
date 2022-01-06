'use strict';

// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function divideNumberTen (divider: number): void {
    if (divider === 0){
        console.log('fail');
    } else {
        let result: number = 10/divider;
        console.log(result);
    }
}
divideNumberTen(2);