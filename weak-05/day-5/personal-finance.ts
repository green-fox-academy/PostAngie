'use strict';
// Create a list with the following items:
// 500, 1000, 1250, 175, 800 and 120
// Create an application which prints out the answers to the following questions:
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings? (print this as a float value)

let finance: number [] = [500, 1000, 1250, 175, 800, 120];
let sum:number = 0;
let great:number;
let cheap: number;
let average: number;

for (let i = 0; i<finance.length; i++){
    sum += finance[i]
};
console.log(sum);


great = Math.max(...finance);
console.log(great);

cheap = Math.min(...finance);
console.log(cheap);

average = sum / finance.length
console.log(average); 