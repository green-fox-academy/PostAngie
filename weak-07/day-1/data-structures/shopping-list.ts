'use strict';

// Create a list with the following items:
// eggs, milk, fish, apples, bread and chicken

let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken']

// Do we have milk in the shopping list? (yes/no)

if (shoppingList.includes('milk')) {
    console.log('yes')
} else {
    console.log('no');
    }

// Do we have bananas in the shopping list? (yes/no)

if (shoppingList.includes('bananas')) {
    console.log('yes')
} else {
    console.log('no');
    }

// The full output of your main method should be the following:
// yes
// no