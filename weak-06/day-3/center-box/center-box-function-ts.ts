'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!

function drawCenterSquare (size: number) {
    let middleX: number = 300;
    let middleY: number = 200;
    ctx.strokeStyle = "blue"
    ctx.strokeRect((middleX-size/2), (middleY-size/2), size, size)
};
let sizes: number [] = [30, 60, 100];
sizes.forEach (element => {
    drawCenterSquare(element)
});