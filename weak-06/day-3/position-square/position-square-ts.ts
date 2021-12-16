'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

function draw3squares (startX: number, startY: number){
    let size: number = 50;
    ctx.fillStyle = 'green'
    for (let i = 0; i < 3; i++) {
        ctx.fillRect(startX, startY, size, size);
        startX += size + 5;
    };
};
draw3squares(0, 0)