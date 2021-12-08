'use strict';
// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method

 let numbers: number[] = [3,4,5,6,7];
 numbers.reverse();
 console.log(numbers);

 //	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers2: number[] = [3,4,5,6,7];
let reversedNumbers2: number[] = [];
for (let i = numbers2.length-1; i >= 0; i--){
    reversedNumbers2.push(numbers2[i])
}
console.log(reversedNumbers2);