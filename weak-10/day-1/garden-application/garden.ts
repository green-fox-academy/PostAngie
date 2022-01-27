'use strict';
import { Plant } from "./plant";
import { Flower } from "./flower";
import { Tree } from "./tree";


export class Garden {
    listOfPlants: Plant[] = [];

    add(plant: Plant) {
        return this.listOfPlants.push(plant);
    }

    showGarden() {
        this.listOfPlants.forEach(element => {
            element.showWateringNeed();
        });
    }

    watering(amount: number): void {
        let numberOfThirsty: number = 0;
        for (let i = 0; i < this.listOfPlants.length; i++) {
            if (this.listOfPlants[i].getIfThirsty()) {
                numberOfThirsty += 1;
            }
        }
        for (let j = 0; j < this.listOfPlants.length; j++) {
            if (this.listOfPlants[j].getIfThirsty()) {
                this.listOfPlants[j].drinkWater(amount / numberOfThirsty);
            }
        }
    }

    printActualLevel() {
        this.listOfPlants.forEach(element => {
            console.log(element.getWaterLevel())
            });
    }
}
