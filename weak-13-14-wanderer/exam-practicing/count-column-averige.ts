'use strict';
// Create a function that receives an nxm matrix of numbers
// and returns an array containing the average of each column 

const matrix: number[][] = [
    [1, 5, 4, 1],
    [3, 6, 5, 5],
    [8, 4, 3, 9],
];

function calculateColumnAverage(matrix: number[][]): number[] {
    let averageOfColumns: number[] = [];
    let colNum: number = matrix[0].length;
    let rowNum: number = matrix.length;
    for (let col = 0; col < colNum; col++) {
        let temp: number = 0;
        for (let row = 0; row < rowNum; row++) {
            temp += matrix[row][col]
        }
        averageOfColumns.push(temp / matrix.length)
    }
    return averageOfColumns;
}
console.log(calculateColumnAverage(matrix));