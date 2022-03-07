'use strict';
// Create a function that takes one string and one integer array as parameters and returns the occurrences 
// of the strings that are present on the indexes of the second array
// Input: ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f",  "p"] and [2, 5, 6 ]

// Output:
// {
//    "f": 3,
//    "z": 1,
//    "p": 3
// }

//Riel:
function findStringByIndex(stringList: string[], index: number): string {
    return stringList[index];
}

function countOccurrences(letters: string[], letter: string): number {
    let occurrence: number = 0;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letter) {
            occurrence++;
        }
    }
    return occurrence;
}

function countLettersOnSpecificIndexes(letters: string[], indexes: number[]): { [key: string]: number } {
    let occurrencesOnSpecificIndexes: { [key: string]: number } = {}
    for (let i = 0; i < indexes.length; i++) {
        let letterToCount: string = findStringByIndex(letters, indexes[i]);
        let occurrence: number = countOccurrences(letters, letterToCount);
        occurrencesOnSpecificIndexes[letterToCount] = occurrence;
    }

    return occurrencesOnSpecificIndexes;
}

// Angie:
export function findOccurrencesByIndex(baseText: string[], indexList: number[]): { [key: string]: number } {
    const occurrences: { [key: string]: number } = {};

    let keysToCount: string[] = [];

    for (let i = 0; i < baseText.length; i++) {
        for (let j = 0; j < indexList.length; j++) {
            if (baseText[i] === baseText[j]) {
                keysToCount.push(baseText[i])
            }
        }
    }
    // ugyanaz:
    // baseText.forEach (string => {
    //     indexList.forEach (item => {
    //         if (string === baseText[item]){
    //             keysToCount.push(string);
    //         }
    //     });
    // });
    
    keysToCount.forEach(char => {
    if (occurrences.hasOwnProperty(char)) {
        occurrences[char] += 1;
    } else {
        occurrences[char] = 1;

    }
});
return occurrences;
}
console.log(findOccurrencesByIndex(["p", "h", "f", "t", "e", "z", "p", "g", "f", "f", "p"], [2, 5, 6]));