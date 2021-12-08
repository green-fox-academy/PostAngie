'use strict'

// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//  
// - Print this two dimensional list to the output

let lists: number[][] = [[]];
let subListsNumber: number = 4;
let subListLength: number = 4;
for (let i = 0; i < subListsNumber; i++) {
    lists[i] = [];
    for (let j = 0; j < subListLength; j++) {
        if (j < i || j > i) {
            lists[i][j] = 0;
        } else {
            lists[i][j] = 1;
        }
    }
    console.log(lists[i]);
}