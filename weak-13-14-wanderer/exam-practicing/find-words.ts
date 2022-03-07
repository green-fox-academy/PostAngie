'use strict';
import fs from 'fs';
import os from 'os';

// Write a method that receives a filename as a string as parameter
// and returns the words present (as a list) in the file which either start with
// "de" or ends with "bug". The logic shall not be case sensitive.

// In case of any errors during file reading and data parsing the method
// shall display: "Cannot read the bloody file"

function isValidWordCharacter(ch: string): boolean {
    // Let's assume that a word can only contain small or capital letters, dash
    // and apostrophe
    return (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        ch === "-" ||
        ch === "'";
}

function makePureString(word: string): string {
    let pureWord = "";
    let chars = word.split("");
    for (let i = 0; i < chars.length; i++) {
        if (isValidWordCharacter(chars[i])) {
            pureWord += chars[i];
        }
    }
    return pureWord;
}

export function findWordsInFile(filename: string): string[] {
    let fileContent: string = '';
    try {
        fileContent = fs.readFileSync(filename, 'utf-8');
    } catch (error) {
        if (error instanceof Error) {
            throw new Error("Cannot read the bloody file");
        }
    }

    let lines: string[] = fileContent.split(os.EOL);
    let words: string[] = [];

    lines.forEach(item => {
        item.split(' ').forEach(word => {
            let pureWord: string = word.replace('.' || ',', '');
            words.push(pureWord);
        });
    });

    let occurrences: string[] = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase().startsWith("de") || words[i].toLowerCase().endsWith("bug")) {
            occurrences.push(words[i]);
        }
    }
    return occurrences;
}

console.log(findWordsInFile('find-word.txt'));

