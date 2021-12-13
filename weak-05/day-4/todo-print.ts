'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let insertFirst: string = 'My todo:\n';
let insert2: string = ' - Download games\n';
let insert3: string = '     - Diablo';
todoText = insertFirst + todoText + insert2 + insert3;

console.log(todoText);