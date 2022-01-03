// We are going to represent our products in a map where the keys are strings representing 
// the product's name and the values are numbers representing the product's price.
// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550

const priceData: { [key: string]: number } = {
    'Eggs':	200,
    'Milk':	200,
    'Fish':	400,
    'Apples': 150,
    'Bread': 50,
    'Chicken':550,
};
let prices: number [] = Object.values(priceData)

// Create an application which prints out the answers to the following questions:
// How much is the fish?

console.log(priceData['Fish']);


// What is the most expensive product?

let mostExpensive: number = Math.max(...prices)
Object.entries(priceData).forEach (([key, value]) => {
    if (value === mostExpensive) {
        console.log(key)
    };
});

// What is the average price?
let total:number = 0;
for(let i = 0; i < prices.length; i++) {
    total += prices[i];
}
console.log(total / prices.length);



// How many products' price is below 300?

let result: number = prices.filter(elem => elem < 300).length
console.log(result);



// Is there anything we can buy for exactly 125?

if (!Object.values(priceData).includes(125)) {
    console.log('No');
} else {
    Object.entries(priceData).forEach (([key, value]) => {
        if (value === 125) {
            console.log(key)
        }   
});
}


// What is the cheapest product?

let cheapest: number = Math.min(...prices)
Object.entries(priceData).forEach (([key, value]) => {
    if (value === cheapest) {
        console.log(key)
    };
});

// The full output of your main method should be the following:
// 400
// Chicken
// 258.33334
// 4
// no
// Bread