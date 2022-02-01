'use strict';

import { Animal } from "./animal";

export class Bird extends Animal {
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
}