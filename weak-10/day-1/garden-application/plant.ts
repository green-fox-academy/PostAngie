'use strict';
import { Flower } from "./flower";
import { Tree } from "./tree";

export class Plant {
    private color: string;
    private waterLevel: number;
    private waterNeed: number;
    private absorb: number;
    
    constructor (color: string, waterNeed: number, absorb: number){
        this.color = color;
        this.waterNeed = waterNeed;
        this.absorb = absorb;
        this.waterLevel = 0;
    }
    
    showWateringNeed(): void {
        if (this.waterLevel <= this.waterNeed) {
            console.log('The ' + this.color + ' ' + this.constructor.name + ' needs water.');
        } else {
            console.log('The ' + this.color + ' ' + this.constructor.name + ' doesn\'t need water.');
        }
    }

    getWaterLevel (): number {
        return this.waterLevel;
    }

    getIfThirsty (): boolean {
        return this.waterLevel <= this.waterNeed
    }

    drinkWater(amount: number): void {
        this.waterLevel += amount * this.absorb;
    }   
}