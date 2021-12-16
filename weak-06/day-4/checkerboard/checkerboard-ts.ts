'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// Fill the canvas with a checkerboard pattern
let blackSize: number = 50;
let emptySize: number = 50;
ctx.fillStyle = "black"

for (let j = 0; j<canvas.height; j+=blackSize){
    if (j == 50 || j == 150 || j==250 || j==350) {
        for (let i = 0; i < canvas.width; i+=blackSize*2) {
            ctx.fillRect(i, j, blackSize, blackSize)
        };
    } else {
            for (let k = blackSize; k < canvas.width; k+=blackSize*2) {
                ctx.fillRect(k, j, blackSize, blackSize)
            };
    }
};


//if (j=blackSize*2){