'use strict';
const fs = require('fs')

// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

function printEachLine (filename: string): void {
  console.log(fs.readFileSync(filename, 'utf-8').split('\r\n'));
}

try {
    printEachLine('my-file.txt');
} catch (error) {
    console.log("Unable to read file:  my-file.txt");
}