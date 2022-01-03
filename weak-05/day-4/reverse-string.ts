'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

export function reverse (param: string) {
let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse (stringToReverse: string): string {
    let reversed: string ="";
    let temp = stringToReverse.split("", stringToReverse.length);
    temp.reverse();
    temp.forEach(char => {
        reversed = reversed.concat(char)
    });
    return reversed
}
console.log(reverse(toBeReversed));
}