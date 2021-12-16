'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

let lineStart: number[];
let lineEnd: number[];
let upperLeft: number[] = [0,0];
let startDiagonal1: number[] = [0,0];
let endDiagonal1: number [] = [600, 400];
let startDiagonal2: number[] = [0, 400];
let endDiagonal2: number[] = [600, 0];

function drawLine (lineStart: number[], lineEnd: number []) {
    ctx.beginPath();
    ctx.moveTo(lineStart[0], lineStart[1]);
    ctx.lineTo(lineEnd[0], lineEnd[1]);
    if (lineStart[1] == upperLeft[1]) {
        ctx.strokeStyle = "green"
    } else {
        ctx.strokeStyle = "red"
    };
    ctx.stroke();
    ctx.closePath();
}
drawLine (startDiagonal1, endDiagonal1);
drawLine (startDiagonal2, endDiagonal2);
