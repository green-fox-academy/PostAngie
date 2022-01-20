'use strict';
import { Animal } from "./animal";

// Create a Farm class
// it has a list of Animals listOfAnimals
// it has a limit that defines how many animals can be kept in the Farm and can be set when the Farm is created
// it has two methods:
// breed() -> creates a new animal if there's place for it
// sell() -> removes the least hungry animal

export class Farm {
    private listOfAnimals: Animal [] = [];
    private limit: number;

    constructor (limit: number) {
        this.limit = limit;
    }

    breed (animal: Animal) {
        if (this.listOfAnimals.length < this.limit) {
            return this.listOfAnimals.push(animal);
        } else {
            console.log('Your farm is full. Sell an Animal to get new one!');
        }
    }

    sell () {
        let leastHungry: Animal = this.listOfAnimals[0];
        for (let i = 1; i < this.listOfAnimals.length; i++) {
            if (leastHungry.getHungerValue() > this.listOfAnimals[i].getHungerValue()) {
                leastHungry = this.listOfAnimals[i];
            }
        }
        console.log('The least hungry animal\'s hunger value is: ' + leastHungry.getHungerValue());
        return this.listOfAnimals = this.listOfAnimals.filter( element => element.getHungerValue() !== leastHungry.getHungerValue());
    }
}