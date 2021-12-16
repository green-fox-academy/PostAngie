'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// draw a box that has different colored lines on each edge

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(400, 100);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(400, 300);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(200, 300);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(200, 100);
ctx.stroke();
ctx.closePath();