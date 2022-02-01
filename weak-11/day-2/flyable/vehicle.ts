'use strict';

export abstract class Vehicle {
    private name: string;
    protected numOfWheels: number = 0;
    protected speed: number = 0;
    
    constructor(name: string) {
        this.name = name;
    }

    abstract setNumOfWheels (wheels: number): void;

    abstract setSpeed (speed: number): void;
}