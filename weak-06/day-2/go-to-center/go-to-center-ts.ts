'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop
let startX: number = 0;
let startY: number = 0;
let incrementX: number = 5;
let incrementY: number = 30;
let numberOfLines: number = 15;

// így külön van a function és a for loop:
// function toTheCenter (startX: number, startY: number,) {
//     ctx.beginPath();
//     ctx.moveTo(startX, startY);
//     ctx.lineTo(300, 200);
//     ctx.strokeStyle = "green"
//     ctx.stroke();
//     ctx.closePath();
// };
// for (let i = 0; i < numberOfLines; i++) {
//     toTheCenter(startX, startY)
//     startX += incrementX
//     startY += incrementY
// };

// Itt egybe raktam...
function linesToTheCenter (startX: number, startY: number, numberOfLines: number) {
    for (let i = 0; i < numberOfLines; i++) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = "green"
    ctx.stroke();
    ctx.closePath();
    startX += incrementX
    startY += incrementY
    };
};
linesToTheCenter(startX, startY, numberOfLines);