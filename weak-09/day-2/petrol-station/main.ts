'use strict';
import { Station } from "./station-and-car";
import { Car } from "./station-and-car";

// Create Station and Car classes
// Station
// it stores how much gas is avaliable: gasAmount
// it can refill a car: refill(car: Car):
// decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
// increases the car's gasAmount
// Car
// it stores how much gas is actually present: gasAmount
// it stores the capacity of the tank: capacity
// create a constructor for the Car class where you:
// initialize gasAmount -> 0
// initialize capacity -> 100

let station1 = new Station
let opel = new Car()
let toyota = new Car()

toyota.printActualgasLevel()
station1.refill(opel)
station1.printInventory()
opel.printActualgasLevel()