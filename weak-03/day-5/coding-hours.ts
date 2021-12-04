'use strict'
console.log('My coding hours in a semester:');
console.log(17 * 5 * 6 + ' hours');
console.log('My coding hours in percentage of working hours:');
console.log(30 / 52 *100 + ' %')

let hours: number = 6
let days: number = 5
let weaks: number = 17
hours = hours * days * weaks;
console.log(hours);
let workhours: number = 52;
workhours *= weaks;
hours = hours / workhours * 100;
console.log(hours);
