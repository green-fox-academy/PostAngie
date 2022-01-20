'use strict';
import { Sharpie } from "./sharpie";
// Create a Sharpie class
// We should know the followings about each sharpie:
// color (which should be a string),
// width (which will be a number) and the
// inkAmount (another number)
// We need to specify the color and the width at creation
// Every sharpie is created with a default inkAmount value: 100
// We can use() the sharpie objects: using it decreases inkAmount by 10

let greenSharpie = new Sharpie('green', 1);
let redSharpie = new Sharpie('red', 3);

greenSharpie.use();
greenSharpie.use();
redSharpie.use();

console.log(greenSharpie);
console.log(redSharpie);

