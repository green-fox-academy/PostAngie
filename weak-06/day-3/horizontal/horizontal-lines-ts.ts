'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop
let firstLineStartX: number = 0;
let firstLineStartY: number = 0;
function drawHorizontalLine (startX: number, startY: number) {
    let lineLength: number = 50;
    ctx.moveTo(startX, startY);
    ctx.lineTo((startX+lineLength), startY);
    ctx.strokeStyle = "green"
    ctx.stroke();
};
for (let  i= 0; i < 5; i++) {
    drawHorizontalLine(firstLineStartX, firstLineStartY);
    firstLineStartY += 30
};