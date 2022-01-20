'use strict';

// Create Station and Car classes
// Car
// it stores how much gas is actually present: gasAmount
// it stores the capacity of the tank: capacity
// create a constructor for the Car class where you:
// initialize gasAmount -> 0
// initialize capacity -> 100

export class Car {
    gasAmount: number;
    capacity: number;

    constructor (gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }

    fill(){
        return this.gasAmount = this.capacity;
    }

    printActualGasLevel (){
        console.log(this.gasAmount);
    }
}