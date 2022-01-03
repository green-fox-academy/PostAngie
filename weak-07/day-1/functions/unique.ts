'Use strict';

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)
//  Example
// console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

export function findUniqueItem (param: number) {
let listOfNumbers: number[] = [1, 11, 34, 11, 2, 52, 20, 52, 61, 1, 34];
function findUnique(notUnique: number[]) {
    let uniqueNumbers: number[] = [];
    notUnique.forEach(element => {
        if (!uniqueNumbers.includes(element)) {
            uniqueNumbers.push(element);
        }
    });
    return uniqueNumbers.sort((a, b) => a - b); //növekvő
    // return uniqueNumbers.sort((a, b) => b - a); //csökkenő
}

console.log(findUnique(listOfNumbers))

}
