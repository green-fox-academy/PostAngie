'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

function toTheCenter (startX: number, startY: number,) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = "green"
    ctx.stroke();
    ctx.closePath();
};
let x: number = 0;
let y: number = 0;
for (let i = 0; i <= canvas.width; i+=20) {
    toTheCenter(i, y)
}
for (let i = 0; i <= canvas.height; i+=20) {
    toTheCenter(x, i)
}
for (let i = canvas.width; i> 0; i-=20) {
    toTheCenter(i, canvas.height)
}
for (let i = canvas.height; i> 0; i-=20) {
    toTheCenter(canvas.width, i)
}
// Megnézem a 4 for loop helyett a kettőt - mindjárt:
// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//       
//       toTheCenter(j * 25, i * 25, 25, 25);