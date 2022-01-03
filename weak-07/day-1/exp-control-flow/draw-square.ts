'use strict';

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 8;
let output: string = '';

export function drawSquare(lineCount: number) {
   for (let i = 1; i <= lineCount; i++) {
      if (i === 1 || i === lineCount) {
         for (let k = 0; k < lineCount; k++) {
            output += '%';
         }
      } else {
         for (let j = 1; j <= lineCount; j++) {
            if (j === 1 || j === lineCount) {
               output += "%";
            } else {
               output += " "
            }
         }
      }

      output += '\n';
   }
   console.log(output);
}