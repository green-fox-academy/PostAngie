'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(200,400);
ctx.moveTo(0, 200);
ctx.lineTo(400, 200);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();


function drawPurple (fromThis:number, untilThis: number): void {
    for (let i=10; i< untilThis; i+=10) {
        ctx.beginPath();
        ctx.moveTo(i+fromThis,0);
        ctx.lineTo(untilThis,i);
        ctx.strokeStyle = "purple";
        ctx.stroke();
        ctx.closePath();
    }
}
function drawGreen (untilThis: number): void {
for (let i=10; i<=untilThis; i+=10) {
    ctx.beginPath();
    ctx.moveTo(0,i);
    ctx.lineTo(i, untilThis);
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.closePath();
}
}
drawPurple(0, 200);
drawPurple (200,400)
drawGreen(200);


function repeatDrawPurple (numberOfParts: number): void {
    let fromX:number = 0;
    let fromY: number = 0;
    for (let j=0; j< numberOfParts; j++){
        drawPurple(j,j)
        
        
        
        
        
        for (let i=10; i< canvas.width/numberOfParts; i+=10) {
            ctx.beginPath();
            ctx.moveTo(i+fromThis,j);
            ctx.lineTo(canvas.width/(numberOfParts/2),i);
            ctx.strokeStyle = "purple";
            ctx.stroke();
            ctx.closePath();
    }
    fromX += canvas.width/(numberOfParts/2)
    fromY += canvas.height/(numberOfParts/2)
}