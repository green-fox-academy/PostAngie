'use strict';
// Write a function, that takes a string as an argument and returns a dictionary with all letters 
// in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function countLetters(text: string): { [key: string]: number } {
    let occurrences: { [key: string]: number } = {};
    if (typeof text !== 'string') {
        throw new Error ('Please give a string type parameter!')
    }
        let charArray: string [] = text.split("");
    charArray.forEach(char => {
        if (char !== " ") {
            if (occurrences.hasOwnProperty(char)) {
                occurrences[char] += 1;
            } else {
                occurrences[char] = 1
            }
        }
    });
    return occurrences;
}