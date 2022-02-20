'use strict';

// Write a function, that takes two strings and returns a boolean value based on 
// if the two strings are Anagramms or not.

export function checkIfAnagrams (firstText: string, secondText: string): boolean {
    if (typeof firstText !== 'string' || typeof secondText !== 'string'){
        return false
    }
        
    let a: string = firstText.split('').sort().join('');
    let b: string = secondText.split('').sort().join('');

    return a === b;
}