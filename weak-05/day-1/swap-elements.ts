'use strict'

let names: string[]= ['Arthur', 'Boe', 'Chloe'];
let temp: string = names[0];
names.splice(0,1,names[2]);
console.log(names);
names.splice(2,1,temp);
console.log(names);