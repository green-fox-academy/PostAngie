'use strict';
let lineCount: number = 4;

export function drawPyramid(lineCount: number) {
    let output: string = '';
    for (let i = 1; i <= lineCount; i++) {
        for (let j = 1; j <= lineCount-i; j++){
            output += " ";
        }
        for (let k=0; k < 2 * i - 1; k++) {
            output += '*';
        }
    output += '\n';
    }
    console.log(output);
};