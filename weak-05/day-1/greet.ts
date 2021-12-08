// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet()` that greets its input parameter
//     - It prints a greeting message e.g. `Greetings dear Green Fox`
// -  Greet `nameToGreet`
'use strict';
let nameToGreet: string = 'Green Fox'
function greetTheName (nameToGreet: string) {
    console.log('Greetings dear ' + nameToGreet);
};
greetTheName(nameToGreet);