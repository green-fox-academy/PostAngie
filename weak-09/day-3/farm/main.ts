'use strict';
import { Animal } from "./animal";
import { Farm } from "./farm";

let myFirstFarm = new Farm(3);
let cat = new Animal();
let dog = new Animal();
let sheep = new Animal();
let chicken = new Animal();
myFirstFarm.breed(cat);
myFirstFarm.breed(dog);
myFirstFarm.breed(sheep);
myFirstFarm.breed(chicken);

cat.play();
dog.eat();
sheep.eat();
sheep.eat();

console.log(dog.getHungerValue());
console.log(cat.getHungerValue());
console.log(sheep.getHungerValue());

console.log(myFirstFarm.sell());

