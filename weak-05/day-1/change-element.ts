// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test
'use strict';

 

// with splice method:
let numbers: number[]= [1, 2, 3, 8, 5, 6];
numbers.splice(3, 1, 4);
console.log(numbers);

// with map method 1:
let numbers2: number[]= [1, 2, 3, 8, 5, 6];
numbers2 = numbers.map (function(element, index){
    if (index == 3){
        return 4
    }
    return element
})
console.log(numbers2);

// with map method 2:
let numbers3: number[]= [1, 2, 3, 8, 5, 6];
numbers3 = numbers3.map ((element, index) => {
    if (index == 3){
        return 4;
    }
    return element
});
console.log(numbers3);
