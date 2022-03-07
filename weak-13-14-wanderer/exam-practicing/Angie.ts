'use strict';

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
planetList.splice(planetList.indexOf('Uranus'), 0, 'Saturn')
// ---
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane', 'Rose', 'Cathy', 'Loren'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let girlsNumber: number = girls.length;
let boysNumber: number = boys.length;
let girlsAndBoys: string[] = []

if (boysNumber > girlsNumber) {
    for (let i = 0; i < girlsNumber; i++) {
        girlsAndBoys.push(girls[i].concat('-').concat(boys[i]));
    }
    for (let j = girlsNumber; j < boysNumber; j++) {
        girlsAndBoys.push(boys[j]);
    }
} else if (boysNumber = girlsNumber) {
    for (let i = 0; i < girlsNumber; i++) {
        girlsAndBoys.push(girls[i].concat('-').concat(boys[i]));
    }
} else {
    for (let i = 0; i < 2; i++) {
        girlsAndBoys.push(girls[i].concat('-').concat(boys[i]));
    }
    // for (let j = boysNumber; j < girlsNumber; j++) {
    //     girlsAndBoys.push(girls[j]);
    // }
}
console.log(girlsAndBoys);

