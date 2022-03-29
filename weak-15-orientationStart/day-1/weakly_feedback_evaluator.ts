'use strict';
import fs from 'fs';
import os from 'os';

// m p h e   // this is just an info line which is not in the actual file
// 1 3 5 3   // this line is an answer from an apprentice
// 2 3 4 3   // this is another response
// ...
// The method should return an object containing the average rating (in each metric) of the mentor.

let responses: string = fs.readFileSync('responses.txt', 'utf-8');
console.log(responses);

let responsesArray: string [] = responses.split(os.EOL)
console.log(responsesArray);

let responsesMatrix: number [][] = [];
responsesArray.forEach ((item, index) => {
    item.split('').forEach (number => {
        parseInt(number);
    })
   
});
console.log(responsesMatrix);

// let responsesMatrix: number [][] = [];
// responsesArray.map(element => parseInt(element));




// let matrix: number [][] = parseInt(responses)

// let averageOfColumns: number[] = [];
//     let colNum: number = matrix[0].length;
//     let rowNum: number = matrix.length;
//     for (let col = 0; col < colNum; col++) {
//         let temp: number = 0;
//         for (let row = 0; row < rowNum; row++) {
//             temp += matrix[row][col]
//         }
//         averageOfColumns.push(temp / matrix.length)
//     }