'use strict';
// create a matrix with the following output
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1

export function printMatrix (raws: number, columns: number): number [] []{
let lists: number[][] = [[]];
for (let i = 0; i < raws; i++) {
    lists[i] = [];
    for (let j = 0; j < columns; j++) {
        if (j < i || j > i) {
            lists[i][j] = 0;
        } else {
            lists[i][j] = 1;
        }
    }
    console.log(lists[i]);
}
return lists;
}