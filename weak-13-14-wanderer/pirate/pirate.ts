'use strict';

import { Random } from "./random";

export class Pirate {
    protected healthPoint: number;
    protected power: number;
    protected intoxLevel: number;
    private random: Random = new Random
    private consumedRum: number = 0;

    constructor() {
        this.healthPoint = this.random.getRandomHP();
        this.power = this.random.getRandomPower();
        this.intoxLevel = 2;
    }

    getHP (): number {
        return this.healthPoint;
    }
    
    drinkSomeRum(): void {
        this.intoxLevel += 1;
        this.consumedRum += 1;
    }

    drinkRandomTimes () {
        for (let i = 0; i < this.random.getRandomRumConsuption(); i++) {
            this.drinkSomeRum();               
        }
    }

    getIntoxLevel (): number {
        return this.intoxLevel;
    }

    getConsumedRumOccasions (): number {
        return this.consumedRum;
    }

    howsItGoingMate() {
        if (this.consumedRum <= 4) {
            console.log("Pour me anudder!");
        } else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            this.intoxLevel = 0;
        }
    }

    brawl(otherPirate: Pirate): void {
        let chance = this.random.getChance();
        console.log(chance);
        if (!this.getIfDead() && !otherPirate.getIfDead()) {
            if (chance < 33) {
                this.die();
                return
            } else if (chance < 66) {
                otherPirate.die();
            } else
                this.die();
                otherPirate.die();
        }
    }
        // where pirate fights another pirate (if both of them are alive):
        // there is 1/3 chance that this dies, the other dies or they both pass out.
    printAllInfo (): void {
            console.log('');
            
    }
  

    die(): number {
        //console.log('He\' is dead.');
        return this.healthPoint = 0;
   
    // this kills off the pirate. When a pirate is dead, every method simply results in: he's dead.
    }

    getIfDead (): boolean {
        return !!(this.healthPoint === 0);
    }
}