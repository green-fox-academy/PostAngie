'use strict';

export function fizzBuzz() {
    for (let a=0; a <=100; a++) {
        if (a % 3 === 0 && a % 5 === 0) {
        console.log('FizzBuzz');
        }   else if (a % 5 === 0) {
        console.log('Buzz');
        } else if (a % 3 === 0) {
        console.log('Fizz');
        } else {
        console.log(a);
        }
    }
}