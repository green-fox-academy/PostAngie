'use strict';
//We are going to play with maps. Feel free to use the built-in methods where possible.
//Create an empty map where the keys are integers and the values are characters
let map: {[key: number]: string} = {};

//Print out whether the map is empty or not
// function isEmpty (param: object): boolean {
//     return ((Object.keys(param).length) === 0);
// }
// console.log(isEmpty(map));
console.log(Object.keys(map).length === 0);

//Add the following key-value pairs to the map
//Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
map = {
    97: 'a',
    98: 'b',
    99: 'c',
    65:	'A',
    66:	'B',
    67:	'C'
}

// Print all the keys
console.log(Object.keys(map));

// Print all the values
console.log(Object.values(map));

// Add value D with the key 68
map[68] = 'D';

// Print how many key-value pairs are in the map
console.log(Object.keys(map).length);

// Print the value that is associated with key 99
console.log(map[68]);

// Remove the key-value pair where with key 97
delete map[97];

// Print whether there is an associated value with key 100 or not
console.log(map[100]);

// Remove all the key-value pairs
map = {};

// Print how many key-value pairs are in the map
console.log(Object.keys(map).length);