'use strict';

export function drawPyramid(lineCount: number) {
    lineCount = 4;
    let n: number = 1;
    let i: number = 0;
    let pad: number = lineCount
    let draw: string = '*';
    while (n <= lineCount) {
        console.log(draw.padStart(pad) + draw.repeat(i));
        n++;
        i += 2;
        pad--;
    }
}