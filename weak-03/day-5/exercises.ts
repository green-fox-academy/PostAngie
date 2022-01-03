'use strict';

let favoriteNumber: number = 21;
console.log('My favorite number is: ' + favoriteNumber)

let numberToSwap1: number = 123;
let numberToSwap2: number = 526;
let temp: number;
temp = numberToSwap1;
numberToSwap1 = numberToSwap2;
numberToSwap2 = temp
console.log(numberToSwap1);
console.log(numberToSwap2);

let massInKg: number = 81.2;
let heightInM: number = 1.78;
heightInM *= heightInM;
console.log(massInKg / heightInM);

let myName: string = 'Angie';
let myAge: number = 46;
let myHeight: number = 1.73;
let married: boolean = false;
console.log('Name: ' + myName);
console.log('Age: ' + myAge);
console.log('Height: ' + myHeight);
console.log('Married: ' + married);

console.log('Exercise variable-mutation');
console.log('Raw 4');
let a: number = 3;
a += 10;
console.log(a);

console.log('Raw 9');
let b: number = 100;
b -= 7;
console.log(b);

console.log('Raw 14');
let c: number = 44;
c *= 2;
console.log(c);

console.log('Raw 19');
let d: number = 125;
d /= 5;
console.log(d);

console.log ('Raw 24');
let e: number = 8;
e **= 3;
console.log(e);

console.log('Raw 30');
let f1: number = 123;
let f2: number = 200;
if (f1>f2) {
    console.log(true)
} else {
    console.log(false)
}

console.log('Raw 34');
let g1: number = 350;
let g2: number = 200;
if (g2*2>g1) {
    console.log(true)
} else {
    console.log(false)
}

console.log('Raw 37');
let h: number = 1357988018575474;
if (h % 11 === 0) {
    console.log(true)
} else {
    console.log(false) 
}

console.log('Raw 41');
let i1: number = 10;
let i2: number = 3;
if (i1>i2*i2 && i1<i2*i2*i2) {
    console.log(true)
} else {
    console.log(false)
}

console.log('Raw 44');
let j: number = 1521;
if (j % 3 === 0 || j % 5 === 0) {
    console.log(true)
} else {
    console.log(false)
}

console.log('Exercise: Cuboid');
let k: number = 20.34;
let l: number = 40.23;
let m: number = 5.5;
let surface: number;
surface = 2*(k*l + k*m + l*m);
console.log('Surface Area: ' + surface);
let volume: number;
volume = k*l*m;
console.log('Volume: ' + volume);

console.log('Exercise Seconds in a day');
// let currentHours: number = 14;
// let currentMinutes: number = 34;
// let currentSeconds: number = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
currentMinutes *=60;
currentHours *=3600;
let currentSeconds: number = 42;
let currentLeftInSeconds: number;
currentLeftInSeconds = currentSeconds + currentMinutes + currentHours;
let fullDayInSeconds: number = 86400;
let remainingSeconds: number;
remainingSeconds = fullDayInSeconds - currentLeftInSeconds;
console.log('Left seconds today: ' + currentLeftInSeconds);
console.log ('Remaining seconds today: ' + remainingSeconds);
