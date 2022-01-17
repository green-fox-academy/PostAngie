'Use strict';
// Given a string, write a recursive (no loops) method which returns a new string with all the lowercase 'x' chars
// changed to 'y' chars.

    // Other examples - useful:
    // let stringToReverse: string = 'abcdefg';
    // function reverseString (text: string, length: number): string {
    //     if (length >=0) {
    //         return text.charAt(length) + reverseString(text, length-1)
    //     }
    //     return ''
    // }
    // console.log(reverseString (stringToReverse, stringToReverse.length-1));

    // 
let myString: string = 'xxXxxX';
    // console.log(myString.replace(/x/g, 'y'))

function deleteAllx (text: string): string {
    if (!text.includes('x')) {
        return text;
    }    
    return deleteAllx (text.replace('x', 'y'));
}
console.log(deleteAllx(myString));