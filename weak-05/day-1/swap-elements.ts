'use strict'

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string[] = ['Arthur', 'Boe', 'Chloe'];
let temp: string = names[0];
names.splice(0, 1, names[2]);
console.log(names);
names.splice(2, 1, temp);
console.log(names);

// I've realized there is a more simple way:
let names2: string[] = ['Arthur', 'Boe', 'Chloe'];
let temp2: string = names2[0];
names2[0] = names2[2];
console.log(names2);
names2[2] = temp2;
console.log(names2);

//Lotti's way:
let names3: string[] = ['Arthur', 'Boe', 'Chloe'];
[names3[0], names3[2]] = [names3[2], names3[0]]
console.log(names3);