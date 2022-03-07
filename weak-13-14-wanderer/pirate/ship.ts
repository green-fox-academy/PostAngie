'use strict';

import { Captain } from "./captain";
import { Pirate } from "./pirate";
import { Random } from "./random";

export class Ship {
    private crew: Pirate [];
    private crewSize: number;
    private random: Random;
    private score: number;

    constructor () {
        this.crew = [];
        this.random = new Random;
        this.crewSize = 0;
        this.score = 0;
    }

    setCrewSize (): number {
        return this.crewSize = this.random.getRandomCrewSize();
    }
    fillShip(): void {
        this.setCrewSize();
        this.crew.push(new Captain);
        for (let i = 1; i < this.crewSize; i++) {
            this.crew.push(new Pirate);
        }
        this.setScore();
     }

    getCrewSize (): number {
         return this.crew.length;
    }

    getAlivePirates (): number {
        let sumOfAlivePirates: number = this.getCrewSize();
        this.crew.forEach (pirate => {
            if (pirate.getIfDead()) {
                sumOfAlivePirates -= 1
            }
        });
        return sumOfAlivePirates;
    }

    printCaptainState () {
        this.crew.forEach (pirate => {
            if (pirate instanceof Captain && !pirate.getIfDead()) {
                console.log("The captain of the ship is alive and he drunk rum " 
                + pirate.getConsumedRumOccasions() + ' times.');
            }
        });
    }

    getCaptainConsumedRum (): number {
        let consumedRum: number = 0;
        this.crew.forEach (pirate => {
            if (pirate instanceof Captain && !pirate.getIfDead()) {
                consumedRum = pirate.getConsumedRumOccasions();
            }
        });
        return consumedRum;
    }

    setScore (): void {
        this.score = this.getAlivePirates() - this.getCaptainConsumedRum()
    }
    getScore (ship: Ship): number {
        return (this.getAlivePirates()) - this.getCaptainConsumedRum()
    }
    
// Ships should be represented in a nice way on command line including information about
    // rum consumed by the captain and its state (dead or alive)
    // number of alive pirates in the crew
    printShipCondition (): void {
        console.log('The number of crew members is: ' + this.getCrewSize() +'.');
        console.log('There is ' + this.getAlivePirates() + ' alive pirates from the crew.')
        this.printCaptainState();
    }
// Ships should have a method to battle other ships: ship.battle(otherShip: Ship)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winning captain and crew has a party: everyone drinks a random number of rum :)
    getWinner (otherShip: Ship): boolean {
        if (this.getScore(otherShip) < this.score){
            return true;
        }
        return false;
    }

    battle (otherShip: Ship): void {
        if (this.getWinner(otherShip)) {
            this.party();
        } else {
            this.loose();
        }
    }

    loose (): void {
        this.crew.forEach (pirate => {
            let randomDie: number = this.random.getBinaryRandom();
            if (randomDie === 0){
                pirate.die();
            }
        });
    }

    party (): void {
        this.crew.forEach (pirate => {
           pirate.drinkRandomTimes();
        });
    }

}