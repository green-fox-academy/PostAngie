'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Draw four different size and color rectangles
// Avoid code duplication!
let colors: string [] = ['red', 'green', 'blue', 'purple'];
let sizes: number[] = [20, 40, 60, 80];
let startX: number = 0;
let startY: number = 0;

for (let i = 0; i < 4; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(startX, startY, sizes[i], sizes[i])
    startX += sizes[i] +10
};