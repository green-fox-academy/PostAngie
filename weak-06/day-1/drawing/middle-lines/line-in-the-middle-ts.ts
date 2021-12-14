'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// draw a red horizontal line to the center of the canvas
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();
ctx.closePath();


// draw a green vertical line to the center of the canvas
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300, 400);
ctx.stroke();
ctx.closePath();