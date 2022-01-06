'use strict';
const fs = require ('fs');

// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFile (fromFileName: string, toFileName: string): boolean {
    try {
        let content: string = fs.readFileSync(fromFileName, 'utf-8')
        fs.writeFileSync(toFileName, content)
        return true
    } catch (error) {
        return false
    }
}
copyFile('../day-3/Angie-file.txt', 'Angie-copy.txt')