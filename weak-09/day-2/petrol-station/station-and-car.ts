'use strict';
// Create Station and Car classes
// Station
// it stores how much gas is available: gasAmount
// it can refill a car: refill(car: Car):
// decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
// increases the car's gasAmount
// Car
// it stores how much gas is actually present: gasAmount
// it stores the capacity of the tank: capacity
// create a constructor for the Car class where you:
// initialize gasAmount -> 0
// initialize capacity -> 100

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

    printActualgasLevel (){
        console.log(this.gasAmount);
    }
}