'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

ctx.strokeStyle = "black";
let smallTriangleHeight: number = 13;
let smallTriangleWidth: number = 16;
let bigTriangleHeight: number = (Math.floor(canvas.width/smallTriangleWidth))*smallTriangleHeight

for (let i = 0; i < canvas.width/smallTriangleWidth; i ++) {
    ctx.beginPath();
    ctx.moveTo(0 + (smallTriangleWidth/2)*i, 400 - smallTriangleHeight*i);
    ctx.lineTo(400 - (smallTriangleWidth/2)*i, 400 - smallTriangleHeight*i);
    ctx.stroke();
    ctx.closePath();
}

for (let i = 0; i < canvas.width/smallTriangleWidth; i ++) {
    ctx.beginPath();
    ctx.moveTo((canvas.width/2)+smallTriangleWidth/2*i, (canvas.height-bigTriangleHeight)+(smallTriangleHeight*i));
    ctx.lineTo(0 + (smallTriangleWidth * i), 400);
    ctx.stroke();
    ctx.closePath();
}

for (let i = 0; i < canvas.width/smallTriangleWidth; i ++) {
    ctx.beginPath();
    ctx.moveTo((canvas.width/2)-smallTriangleWidth/2*i, (canvas.height-bigTriangleHeight)+(smallTriangleHeight*i));
    ctx.lineTo(400 - (smallTriangleWidth * i), 400);
    ctx.stroke();
    ctx.closePath();
}