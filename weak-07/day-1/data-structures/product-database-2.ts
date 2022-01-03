// Product database 2
// We are going to represent our products in a map where the keys are strings representing 
// the product's name and the values are numbers representing the product's price.
// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550

const productData: { [key: string]: number } = {
    'Eggs':	200,
    'Milk':	200,
    'Fish':	400,
    'Apples': 150,
    'Bread': 50,
    'Chicken':550,
};
let productPrices: number [] = Object.values(productData)

// Create an application which prints out the answers to the following questions:
// Which products cost less than 201? (just the name)
Object.entries(productData).forEach (([key, value]) => {
    if (value < 201) {
        console.log(key)
    };
});

// Which products cost more than 150? (name + price)
Object.entries(productData).forEach (([key, value]) => {
    if (value > 150) {
        console.log(key + ': ' + value);
    };
});


// The full output of your main method should be the following:
// Apples
// Eggs
// Milk
// Bread
// Fish 400
// Chicken 550
// Eggs 200
// Milk 200
// NOTE: Your output lines may be in a different order as the HashMap API does not define the order of iteration.