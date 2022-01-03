'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

for (let i=10; i<= canvas.height; i+=30) {
    ctx.beginPath();
    ctx.moveTo(i+10,0);
    ctx.lineTo(canvas.width,i);
    ctx.strokeStyle = "purple";
    ctx.stroke();
    ctx.closePath();
}

for (let i=10; i<= canvas.height; i+=30) {
    ctx.beginPath();
    ctx.moveTo(0,i+10);
    ctx.lineTo(i, canvas.height);
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.closePath();
}
