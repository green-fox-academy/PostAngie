'use strict';

// Create a function that receives an n x m number matrix
// and returns an array containing the sum of each line 
let input: number [][] = [[3, 4, 5, 6], [1, 2, 3, 2]]

// returns 
// [18, 8]

export function countLines (input: number [][]): number [] {
    let sumOfLines: number [] = [];
    for (let i = 0; i < input.length; i++) {
        let sum: number =0;
        for (let j = 0; j < input[i].length; j++) {
            sum += input[i][j]    
        }
    sumOfLines.push (sum)
    }
    return sumOfLines;

}

console.log(countLines(input))