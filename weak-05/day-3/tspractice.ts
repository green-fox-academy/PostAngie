// 34, 12, 24, 9, 5

let numbers: number[] = [88, 34, 12, 24, 9, 5];

function sortWithBubble(notSorted: number[]): number[] {
    for (let j = 0; j < notSorted.length - 1; j++) {
        for (let i = 0; i < notSorted.length - 1; i++) {
            if (notSorted[i] > notSorted[i + 1]) {
                [notSorted[i], notSorted[i + 1]] = [notSorted[i + 1], notSorted[i]]
            }
        }
    }

    return notSorted;
}

function sortAdvancedWithBubble(notSorted: number[], ascending: boolean): number[] {
    for (let j = 0; j < notSorted.length - 1; j++) {
        for (let i = 0; i < notSorted.length - 1; i++) {
            let firstItem: number = notSorted[i];
            let nextItem: number = notSorted[i + 1];
            if ((firstItem > nextItem && ascending) || (firstItem < nextItem && !ascending)) {
                [firstItem, nextItem] = [nextItem, firstItem];
            }
        }
    }

    return notSorted;
}

// console.log(sortWithBubble(numbers))
// console.log(sortAdvancedWithBubble(numbers, false))
// -------------------------------------------------------------------
'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables



//let date = new Date(2021, 11, 29, 14, 34, 42);
let allSecondsInADay = 24 * 60 * 60;
let actualSeconds = currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;
console.log(allSecondsInADay - actualSeconds)

let date = new Date(1995, 11, 17, 3, 24, 0);
let date2 = new Date('1995-12-17T03:24:00')
console.log(date);
console.log(date2);

