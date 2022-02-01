'use strict';
import fs from "fs";
import os from "os";

function countAvarageOfLongestWords(filename: string): number {
    let content: string = '';
    try {
        content = fs.readFileSync(filename, 'utf-8');
    } catch (error) {
        console.error("I must warn you friendly that the file" + filename + "could not be read.");
    }
        let arrayOfLines: string[] = content.split(os.EOL);
        let arrayOfWords: string[] = [];
        arrayOfLines.forEach(w => {
            arrayOfWords = arrayOfWords.concat(w.split(" "));
        });
        let wordLengths: number[] = [];
        arrayOfWords.forEach(word => {wordLengths.push(word.length)});
        let orderedByLength:number[] = wordLengths.sort((a,b) => b-a);
        let avarageOfThreeLongestWordsLength: number = (orderedByLength[0] + orderedByLength[1] + orderedByLength[2])/3;
        return avarageOfThreeLongestWordsLength; 
}

console.log(countAvarageOfLongestWords("text.txt"));