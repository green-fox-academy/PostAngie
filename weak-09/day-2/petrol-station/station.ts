'use strict';
import { Car } from "./car";

// Create Station and Car classes
// Station
// it stores how much gas is available: gasAmount
// it can refill a car: refill(car: Car):
// decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
// increases the car's gasAmount


export class Station {
    gasAmount: number;

    constructor (gasAmount: number = 1000) {
        this.gasAmount = gasAmount
    }

    refill(vehicle: Car) {
        vehicle.fill();
        return this.gasAmount -= vehicle.capacity;
    }

    printInventory (){
        console.log(this.gasAmount);
    }
}