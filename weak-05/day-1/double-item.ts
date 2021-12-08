'use strict';

// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer']
drinks.forEach(item => {
    console.log(item+item)
});

// map method:
let drinks2: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer']
drinks2 = drinks2.map (item => item+item);
console.log(drinks2);