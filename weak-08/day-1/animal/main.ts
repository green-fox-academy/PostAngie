'Use strict';
import { Animal } from "./animal";
// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// When creating a new animal instance these values must be set to the default 50 value
// Every animal can eat() which decreases its hunger by one
// Every animal can drink() which decreases its thirst by one
// Every animal can play() which increases both its hunger and thirst by one

let cat = new Animal()
let dog = new Animal()

cat.play()
console.log(cat.thirstValue + ' ' + cat.hungerValue);

dog.eat()
console.log(dog.hungerValue);

