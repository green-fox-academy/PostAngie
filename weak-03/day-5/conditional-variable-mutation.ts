'use strict';
let a: number = 24;
let output1: number = 0;
if (a % 2 === 0) {
    output1++
}
console.log (output1);

let b: number = 13;
let output2: string = '';
if (b>10 && b<20) {
    output2 = "Sweet"
}
if (b<10){
    output2 = "Less"
}
if (b>20) {
    output2 = "More"
}
console.log(output2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;
if (credits >= 50 && !isBonus) {
    c += 2
}
if (credits < 50 && !isBonus) {
    c++
 }
if (isBonus){
    c = 123
}
 console.log(c);

 let d: number = 8;
 let time: number = 200;
 let output3: string ='';
 if (d % 4 === 0 && time < 200){
     output3 = 'check'
 } else if (time > 200) {
     output3 = 'Time out'
 } else {
     output3 = 'Run Forest Run!'
 }
 console.log(output3);