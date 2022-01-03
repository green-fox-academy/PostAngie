'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let numberOfStars: number = 300;

ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);

for (let i=0; i<numberOfStars; i++){
    let randomColor: number = Math.floor(Math.random() * 255);
    let randomX: number = Math.floor(Math.random() * canvas.width);
    let randomY: number = Math.floor(Math.random() * canvas.height);
    ctx.fillStyle = "rgb("+randomColor+", "+randomColor+", "+randomColor+")";
    ctx.fillRect (randomX, randomY, 5, 5)
}
