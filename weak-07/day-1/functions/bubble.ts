'Use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order

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
console.log(sortWithBubble(numbers))

//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

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

console.log(sortAdvancedWithBubble(numbers, false))