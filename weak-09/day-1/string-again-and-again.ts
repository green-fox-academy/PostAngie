'Use strict';

// Given a string, write a recursive (no loops) method which returns a new string with all adjacent chars
// separated by an *. Please note that there should be no trailing * at the end of the returned string. 
// For example, the string word should be changed to w*o*r*d.

function insertSeparator (text: string, index: number): string {
    if (index < text.length-1) {
    return text.charAt(index) + '*' + insertSeparator(text, index+1);
    }
    return text.charAt(text.length-1);
    
}
console.log(insertSeparator('hello', 0));