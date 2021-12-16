'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let stepSize: number = 10;
let startX: number = 10;
let startY: number = 10;
for (let i = 0; i < 6; i++) {
    ctx.fillStyle = 'purple'
    ctx.strokeStyle = 'black'
    ctx.fillRect(startX, startY, stepSize, stepSize)
    ctx.strokeRect(startX, startY, stepSize, stepSize)  // maybe it is not necessary
    startX += stepSize
    startY += stepSize
    stepSize +=20
};