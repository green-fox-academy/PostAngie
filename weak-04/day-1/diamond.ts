'use strict';

let lineCount: number = 7;
let output: string = '';
for (let i = 1; i <= lineCount; i++) {
    for (let j = 1; j <= lineCount - i; j++) {
        output += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        output += '*';
    }
    output += '\n';
}
console.log(output);
for (let i = 0; i < lineCount; i++) {
    for (let j = 0; j < i; j++) {
        output += ' ';
    }
    for (let k = 0; k < 2 * (lineCount - i); k++) {
        output += '*';
    }
    output += '\n';
}
console.log(output);