'use strict';
import { Animal } from "./animal";
import { Flyable } from "./flyable";

export class Bird extends Animal implements Flyable {
    maxHeightOfFlying: number = 0;

    constructor(name: string) {
        super(name);
    }

    setMaxHeightOfFlying(height: number): void {
        this.maxHeightOfFlying = height;
    }

    getMaxHeightOfFlying(): number {
        return this.maxHeightOfFlying;
    }

    breed(): string {
        return 'laying eggs';
    }

    land(): void {
        console.log('I can land anywhere.');
    }

    fly(): void {
        console.log('I fly with wings, my max height is: ' + this.getMaxHeightOfFlying());
    }

    takeOff(): void {
        console.log('I can take off from any surface.');
    }
}