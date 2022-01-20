'use strict';

import { Sharpie } from "./sharpie";
import { SharpieSet } from "./sharpie-set";

let myFirstSet = new SharpieSet;

let greenSharpie = new Sharpie('green', 1);
let redSharpie = new Sharpie('red', 3);
let blackSharpie = new Sharpie('black', 3);

myFirstSet.add(greenSharpie);
myFirstSet.add(redSharpie);
myFirstSet.add(blackSharpie);

for (let index = 0; index < 10; index++) {
    greenSharpie.use();
}
console.log(greenSharpie.getInkAmount());
blackSharpie.use();
redSharpie.use();

console.log (myFirstSet.countUsable());
console.log(myFirstSet.removeTrash());