'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawColoredCenterSquare (size: number, color: string) {
    let middleX: number = canvas.width/2
    let middleY: number = canvas.height/2
    ctx.strokeStyle = color;
    ctx.strokeRect((middleX-size/2), (middleY-size/2), size, size);
};
let rainbow: string [] = ['red', 'orange', 'yellow', "green", 'blue', 'indigo', 'purple'];
let startSize: number = 10;
let increaseSize: number = 10;


for (let canvasY = 0; canvasY <= canvas.height; canvasY+=20) {   //Mennyivel növeljem? +=((rainbow.length*increaseSize)+startSize))
    for (let i = 0; i < rainbow.length; i++) {
        drawColoredCenterSquare (startSize, rainbow[i])
        startSize += increaseSize
    };
};
