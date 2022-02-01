'use strict';
import { Flyable } from "./flyable";
import { Vehicle } from "./vehicle";

export class Helicopter extends Vehicle implements Flyable {
    maxHeightOfFlying: number = 0;

    constructor () {
        super ('Helicopter');
    }

    land(): void {
        console.log('I can land on smooth surface only.');
    }

    fly(): void {
        console.log('I fly with propellers, my max height is: ' 
        + this.getMaxHeightOfFlying());
    }

    takeOff(): void {
        console.log('I can take off from a plane surface.');
    }
    
    setNumOfWheels(wheels: number): void {
        this.numOfWheels = wheels;
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }
    setMaxHeightOfFlying(height: number): void {
        this.maxHeightOfFlying = height;
    }

    getMaxHeightOfFlying(): number {
        return this.maxHeightOfFlying;
    }



}