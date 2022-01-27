'use strict';
import { Aircraft } from "./aircraft";

export class Carrier {
    private ammoStore: number;
    private listOfAirCrafts: Aircraft [];
    private healthPoint: number;

    constructor (ammoStore: number, healthPoint: number) {
        this.ammoStore = ammoStore;
        this.healthPoint = healthPoint;
        this.listOfAirCrafts = [];
    }

    add (aircraft: Aircraft) {
        return this.listOfAirCrafts.push(aircraft);
    }

    fill () {
        let sumOfNeeded: number = 0;
        let used: number = 0;
        for (let i = 0; i < this.listOfAirCrafts.length; i++) {
            sumOfNeeded += this.listOfAirCrafts[i].getNeededAmmo();
        }
        if (this.ammoStore < sumOfNeeded ) {
            for (let j = 0; j < this.listOfAirCrafts.length; j++) {
                if (this.listOfAirCrafts[j].isPriority()) {
                    used += this.listOfAirCrafts[j].refillAmmo(this.listOfAirCrafts[j].getNeededAmmo());
                }
            }   
        } else if (this.ammoStore <= 0) {
            throw new Error("Ammo Store is empty!");
            
        } else {
            for (let j = 0; j < this.listOfAirCrafts.length; j++) {
                used += this.listOfAirCrafts[j].refillAmmo(this.listOfAirCrafts[j].getNeededAmmo());
            }   
        }
        this.ammoStore -= used;
    }

    fight (carrier: Carrier) {
        for (let i = 0; i < this.listOfAirCrafts.length; i++) {
            carrier.healthPoint -= this.listOfAirCrafts[i].fight();
        }
    }

    getTotalDamage (): number {
        let totalDamage: number = 0;
        for (let i = 0; i < this.listOfAirCrafts.length; i++) {
            totalDamage += this.listOfAirCrafts[i].getAllDamage();
        }
        return totalDamage;
    }

    getStatus () {
        if (this.healthPoint <= 0) {
            console.log('It\'s dead Jim :(');
        } else {
        console.log('HP: ' + this.healthPoint + ', Aircraft count: ' + this.listOfAirCrafts.length + 
        ', Ammo Storage: ' + this.ammoStore + ', Total damage: ' + this.getTotalDamage());
        console.log('Aircrafts:');
        this.listOfAirCrafts.forEach (element => {
            element.getStatus();
        });
        }
    }

}