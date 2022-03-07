'use strict';
import fs from 'fs';
import os from 'os';

// Write a method which can read and parse a file containing information about songs. 
// The method should receive one string parameter: the name of the file. 
// The method should handle possible exceptions by printing messages to the standard output. 
// It should return with the year which produced the most songs.

function readFileToString(filename: string): string {
    let fileContent: string = '';
    try {
        fileContent = fs.readFileSync(filename, 'utf-8');
    } catch (error) {
        console.error('Cannot read the file')
    }
    return fileContent;
}

function findYearwithMostSongs(filename: string): string {
    let text: string = readFileToString(filename);
    let year: string = '';

    let lines: string[] = text.split(os.EOL);
    let years: string [] = [];
    lines.forEach (item => {
        years.push(item.slice(-4));
    });
        
    const occurrences: { [key: string]: number } = {};
    years.forEach(char => {
        if (occurrences.hasOwnProperty(char)) {
            occurrences[char] += 1;
        } else {
            occurrences[char] = 1;
    
        }
    });
    const sorted = Object.entries(occurrences).sort(([, a], [, b]) => b - a);
    year = sorted[0][0];

    return year;
}


console.log(findYearwithMostSongs('songs.txt')); 
