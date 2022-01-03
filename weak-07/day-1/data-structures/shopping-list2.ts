'use strict';
// Represent the following products with their prices:
// Product	Price
const priceList: { [key: string]: number } = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10,
};

// Represent Bob's shopping list:
let bob: { [key: string]: number } = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1,
};
// Represent Alice's shopping list:
let alice: { [key: string]: number } = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10,
};

// Create an application which prints out the answers to the following questions:

// How much does Bob pay?
// How much does Alice pay?

function getPayable(list: { [key: string]: number }): void {
    let pay: number = 0;
    for (const [product, amount] of Object.entries(list)) {
        pay += priceList[product] * amount
    }
    console.log(pay);

}
getPayable(bob);
getPayable(alice);

// Who buys more Rice?
// Who buys more Potato?
// Who buys more Ham?
// Who buys more Apples?

// function compareBobAlice (product: string): void {
//     if (alice[product] > bob[product] || alice[product] !== undefined && bob[product] === undefined){
//     console.log("Alice");
//     } else if (alice[product] < bob[product] || alice[product] === undefined && bob[product] !== undefined) {
//     console.log("Bob");
//     } else if (alice[product] === bob[product] || ((alice[product] === undefined && bob[product] === undefined))){
//         console.log("No one");
//     }
// };
// compareBobAlice("Rice");
// compareBobAlice("Potato");
// compareBobAlice("Ham");
// compareBobAlice("Apples");

function buyMore2(product: string) {
    let aliceHasProduct: boolean = alice.hasOwnProperty(product);
    let bobHasProduct: boolean = bob.hasOwnProperty(product);
    let bothHasProduct: boolean = aliceHasProduct && bobHasProduct;
    if (bothHasProduct && bob[product] > (alice[product]) || bobHasProduct && !aliceHasProduct) {
        console.log("Bob");
    } else if (bothHasProduct && alice[product] > (bob[product]) || aliceHasProduct && !bobHasProduct) {
        console.log("Alice");
    } else {
        console.log("no one");
    }
}
buyMore2("Rice");
buyMore2("Potato");
buyMore2("Ham");
buyMore2("Apples");

// Who buys more of different products?

if (Object.keys(alice).length > Object.keys(bob).length) {
    console.log('Alice');
} else {
    console.log('Bob');

}

// Who buys more items? (more pieces)

let bobSum: number = 0;
let aliceSum: number = 0;
Object.values(bob).forEach((item) => {
    bobSum += item
})
Object.values(alice).forEach((item) => {
    aliceSum += item
})

if (bobSum > aliceSum) {
    console.log('Bob');
} else {
    console.log('Alice');
}

// The full output of your main method should be the following:

// 72.09
// 64.2
// Bob
// Bob
// no one
// no one
// Bob
// Alice