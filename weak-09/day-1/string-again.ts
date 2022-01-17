'Use strict';
// Given a string, write a recursive (no loops) method which returns a new string 
// with all the lowercase 'x' chars removed.

let myString: string = 'xyzXYZxyz';

function deleteAllx (text: string): string {
    if (!text.includes('x')) {
        return text;
    }    
    return deleteAllx (text.replace('x', ''));
}
console.log(deleteAllx(myString));