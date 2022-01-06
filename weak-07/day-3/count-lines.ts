'use strict';
const fs = require('fs');

// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLines (filename: string): number {
    try {
        let numberOfLines: number = fs.readFileSync(filename, 'utf-8').split('\r\n').length;
        return numberOfLines;
    } catch (error) {
        return 0;
    }
}

console.log(countLines('my-file.txt'))